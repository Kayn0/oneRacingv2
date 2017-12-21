import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatsDataProvider } from '../../providers/stats-data/stats-data';
import { Chart } from 'chart.js';

/**
 * Generated class for the PuStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pu-stats',
  templateUrl: 'pu-stats.html',
})
export class PuStatsPage {
	
	@ViewChild('lineCanvasPoints') lineCanvasPoints;
  @ViewChild('lineCanvasValue') lineCanvasValue;
  public chartValue: any;
  public chartPoints: any;

	public selectedPu: any;
	public round: any;
	public puStats: any;
	public puInfo: any;
  public puValueChange = 0;
  public averagePoints: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public storage: Storage,
  	public statsData: StatsDataProvider
  ){

  	this.selectedPu = this.navParams.data;
  	// call local to get round number
    storage.get('currentRound').then((val) => {
      this.round = val;
      //call to firebase to retrieve drivers list data 
      this.statsData.getStats().on('value', snapshot => {
        let rawList = [];
        let selected = [];
        let arrayHolder = [];
        let rootNode = snapshot.val();
        let puNode = [];
        var i;
        //get race result data and find drivers node.
        for (i = 0; i < rootNode.length; i++) {
        	if (rootNode[i].powerUnits) {
						arrayHolder = rootNode[i].powerUnits;
						puNode = Object.keys(arrayHolder).map(key => arrayHolder[key]);
     				selected.push(puNode);
        	}
        }

        //loop through all pu's for each round and get selected drivers data
    		for (i = 0; i < selected.length; i++) {
    			for (var k = 0; k < selected[i].length; k++) {
						if (selected[i][k].puName == this.selectedPu) {
							rawList.push(selected[i][k]);
						}
    			}
  			}     
        this.puStats = rawList;
        this.puInfo = this.puStats[this.puStats.length - 1];

        //pass pu data to chart
        this.chartData(this.puStats);
      });
    });
	} //end constructor

	//add drivers data to chart
  chartData(puStats) {
    let puPoints = [];
    let puValue = [];
    let roundCounter = [];
    var totalPoints = 0;

    for(var i = 0; i < puStats.length; i++) {
      puPoints.push(puStats[i].puPoints);
      puValue.push(parseInt(puStats[i].puValue));
      roundCounter.push([i]);
      //calc drivers total value change
      this.puValueChange = puStats[0].valChange + puStats[i].valChange;
      totalPoints = totalPoints + puStats[i].puPoints;
    }
    this.averagePoints = Math.floor(totalPoints / (puStats.length - 1));
    
    //Drivers points chart
    this.chartPoints = new Chart(this.lineCanvasPoints.nativeElement, {
      type: 'line',
      data: {
        labels: roundCounter,
        datasets: [
          {
            label: "Power unit points",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(211,20,17,0.5)",
            borderColor: "rgba(211,20,17,1)",
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(211,20,17,1)",
            pointBackgroundColor: "rgba(211,20,17,1)",
            pointBorderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 4,
            pointHitRadius: 10,
            data: puPoints,
            spanGaps: false,
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales:{
          xAxes:[{
            gridLines:{
              color:"rgba(0,0,0,1)",
              zeroLineColor:"rgba(0,0,0,0.4)",
              zeroLineWidth: 2,
            },
            ticks: {
              fontColor: "rgba(255,255,255,0.7)",
              fontFamily:"'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
            }
          }],
          yAxes:[{
            gridLines:{
              color:"rgba(0,0,0,1)",
              zeroLineColor:"rgba(0,0,0,0.4)",
              zeroLineWidth: 2, 
            },
            ticks: {
              fontColor: "rgba(255,255,255,0.7)",
              fontFamily:"'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
            }
          }],
        }
      }
    });

    //Drivers value chart
    this.chartValue = new Chart(this.lineCanvasValue.nativeElement, {
      type: 'line',
      data: {
        labels: roundCounter,
        datasets: [
          {
            label: "Power unit value",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(29,155,160,0.4)",
            borderColor: "rgba(29,155,160,1)",
            borderCapStyle: 'round',
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(29,155,160,1)",
            pointBackgroundColor: "rgba(29,155,160,1)",
            pointBorderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 4,
            pointHitRadius: 10,
            data: puValue,
            spanGaps: false,
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
           xAxes:[{
            ticks: {
             fontFamily:"'ubuntu-bold', 'Helvetica', 'Arial', sans-serif", 
             fontColor: "rgba(255,255,255,0.7)",
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: "rgba(255,255,255,0.7)",
              fontFamily:"'ubuntu-bold', 'Helvetica', 'Arial', sans-serif",
              callback: function(value, index, values) {
                if(parseInt(value) >= 1000){
                  value = value / 1000000;
                  return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
                } else {
                  return '$' + value;
                }
              }
            }
              
          }]
        }
      } 
    });
  }//end chart data
  
  ionViewWillEnter() {
  	let tabHeader = document.querySelectorAll('.tab-content');
    if (tabHeader !== null) {
    	tabHeader["0"].style.display = 'none';   
    }
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuStatsPage');
  }
}
