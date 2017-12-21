import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { StatsDataProvider } from '../../providers/stats-data/stats-data';
import { Chart } from 'chart.js';

/**
 * Generated class for the ChassisStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chassis-stats',
  templateUrl: 'chassis-stats.html',
})
export class ChassisStatsPage {
	
	@ViewChild('lineCanvasPoints') lineCanvasPoints;
  @ViewChild('lineCanvasValue') lineCanvasValue;
  
  public chartValue: any;
  public chartPoints: any;

	public round: any;
	public selectedChassis: any;
	public chassisStats: any;
 	public chassisInfo: any;
 	
  public averagePoints: any;
  public chassisValueChange = 0;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public storage: Storage,
  	public statsData: StatsDataProvider
  ){

 		console.log("passed driver", this.navParams.data);
  	this.selectedChassis = this.navParams.data;

  	// call local to get round number
    storage.get('currentRound').then((val) => {
      this.round = val;
      console.log('1 - The Current Round is: ', this.round);
      var i;
      //call to firebase to retrieve drivers list data 
      this.statsData.getStats().on('value', snapshot => {
        let rawList = [];
        let selected = [];
        let arrayHolder = [];
        let rootNode = snapshot.val();
        let chassisNode = [];

        //get race result data and find chassis node.
        for (i = 0; i < rootNode.length; i++) {
        	if (rootNode[i].chassis) {
						arrayHolder = rootNode[i].chassis;
						chassisNode = Object.keys(arrayHolder).map(key => arrayHolder[key]);
     				selected.push(chassisNode);
        	}
        }

        //loop through all drivers for each round and get selected drivers data
    		for (i = 0; i < selected.length; i++) {
    			for (var k = 0; k < selected[i].length; k++) {
						if (selected[i][k].chassisName == this.selectedChassis) {
							rawList.push(selected[i][k]);
						}
    			}
  			}     
        this.chassisStats = rawList;
        this.chassisInfo = this.chassisStats[this.chassisStats.length - 1];
        
        //pass driver data to chart
        this.chartData(this.chassisStats);
      });
    });
  } // end constructor

  //add drivers data to chart
  chartData(chassisStats) {
    let chassisPoints = [];
    let chassisValue = [];
    let roundCounter = [];
    var totalPoints = 0;

    console.log('chassisStatsPage', chassisStats);
    
    for(var i = 0; i < chassisStats.length; i++) {
      console.log('round stats', chassisStats[i]);
      chassisPoints.push(chassisStats[i].chassisPoints);
      chassisValue.push(parseInt(chassisStats[i].chassisValue));
      roundCounter.push([i]);
      totalPoints = totalPoints + chassisStats[i].chassisPoints;

      //calc chassis total value change
      this.chassisValueChange = chassisStats[0].valChange + chassisStats[i].valChange;
    }

    //calc average points per race
    this.averagePoints = Math.floor(totalPoints / (chassisStats.length - 1));
    
    console.log('this.averagePoints', this.averagePoints);
    console.log('driverValueChange', this.chassisValueChange);

    console.log('driverPoints', chassisPoints);
    console.log('driverValue', chassisValue);
    console.log('roundCounter', roundCounter);

    //Drivers points chart
    this.chartPoints = new Chart(this.lineCanvasPoints.nativeElement, {
      type: 'line',
      data: {
        labels: roundCounter,
        datasets: [
          {
            label: "Constructor points",
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
            data: chassisPoints,
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
            label: "Constructor value",
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
            data: chassisValue,
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
    console.log('ionViewDidLoad ChassisStatsPage');
  }
}
