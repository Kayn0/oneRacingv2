import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { StatsDataProvider } from '../../providers/stats-data/stats-data';
import { Chart } from 'chart.js';
/**
 * Generated class for the DriverStatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-stats',
  templateUrl: 'driver-stats.html',
})
export class DriverStatsPage {
	@ViewChild('lineCanvasPoints') lineCanvasPoints;
  @ViewChild('lineCanvasValue') lineCanvasValue;
  @ViewChild('barCanvasQualRace') barCanvasQualRace;

  public chartValue: any;
  public chartPoints: any;
  public qualRace: any;
  public round: any;
  public selectedDriver: any;
  public driverStats: any;
  public driverValueChange = 0;

  public driverInfo: any;
  public averagePoints: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public storage: Storage,
  	public statsData: StatsDataProvider
  ){

    console.log("passed driver", this.navParams.data);
  	this.selectedDriver = this.navParams.data;

  	// call local to get round number
    storage.get('currentRound').then((val) => {
      this.round = val;
      console.log('1 - The Current Round is: ', this.round);

      //call to firebase to retrieve drivers list data 
      this.statsData.getStats().on('value', snapshot => {
        let rawList = [];
        let selectedDriver = [];
        let arrayHolder = [];
        let rootNode = snapshot.val();
        let driversNode = [];
        var i;
        //get race result data and find drivers node.
        for (i = 0; i < rootNode.length; i++) {
        	if (rootNode[i].drivers) {
						arrayHolder = rootNode[i].drivers;
						driversNode = Object.keys(arrayHolder).map(key => arrayHolder[key]);
     				selectedDriver.push(driversNode);
        	}
        }
        //loop through all drivers for each round and get selected drivers data
    		for (i = 0; i < selectedDriver.length; i++) {
    			for (var k = 0; k < selectedDriver[i].length; k++) {
						if (selectedDriver[i][k].abrev == this.selectedDriver) {
							rawList.push(selectedDriver[i][k]);
						}
    			}
  			}     
        this.driverStats = rawList;
        console.log('Driver stats', this.driverStats);

        this.driverInfo = this.driverStats[this.driverStats.length - 1];
        console.log('Driver stats', this.driverInfo);
        //pass driver data to chart
        this.chartData(this.driverStats);
      });
    });
  } //end constructor

  //add drivers data to chart
  chartData(driverStats) {
    let driverPoints = [];
    let driverValue = [];
    let roundCounter = [];
    let qualRaceCounter = [];
    let qualified = [];
    let finished = [];
    var totalPoints = 0;

    console.log('DriverStatsPage', driverStats);
    for(var i = 0; i < driverStats.length; i++) {
      console.log('round stats', driverStats[i]);
      driverPoints.push(driverStats[i].driverPoints);
      driverValue.push(parseInt(driverStats[i].driverValue));
      roundCounter.push([i]);

      //calc drivers total value change
      this.driverValueChange = driverStats[0].valChange + driverStats[i].valChange;

      //exclude round 0 data
      if (i > 0){
	      //calc average points per race
	      totalPoints = totalPoints + driverStats[i].driverPoints;
	      console.log('totalPoints', totalPoints);

	      //store qualified and finished data for charts
        qualRaceCounter.push([i]);
        qualified.push(driverStats[i].qualified); 
        finished.push(driverStats[i].position); 
      }
    }

    this.averagePoints = Math.floor(totalPoints / (driverStats.length - 1));

    //Drivers points chart
    this.chartPoints = new Chart(this.lineCanvasPoints.nativeElement, {
      type: 'line',
      data: {
        labels: roundCounter,
        datasets: [
          {
            label: "Points: ",
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
            data: driverPoints,
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
            label: "Value: ",
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
            data: driverValue,
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
    console.log('ionViewDidLoad DriverStatsPage');
  }
}
