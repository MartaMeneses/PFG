import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
/*import { Assignment } from 'src/app/interfaces/assignment';*/

import {  ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";
/*import { Student } from 'src/app/interfaces/student';*/
import { Router } from '@angular/router';
import { axisLeft, axisRight, color, text } from 'd3';
import * as ApexCharts from 'apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
  responsive : ApexResponsive;
  title : ApexTitleSubtitle;
  legend : ApexLegend;
  grid : ApexGrid;
};

@Component({
  selector: 'app-feedbackfruits-tab',
  templateUrl: './feedbackfruits-tab.component.html',
  styleUrls: ['./feedbackfruits-tab.component.css']
})
export class FeedbackfruitsTabComponent implements OnInit {

  @ViewChild("chart") chart !: ChartComponent;
  public Grades!: Partial<ChartOptions> | any;
  public ReadInstructions!: Partial<ChartOptions> | any;
  public HandedIn!: Partial<ChartOptions> | any;
  public FinishedFeedback!: Partial<ChartOptions> | any;
  public ReadFeedback!: Partial<ChartOptions> | any;
  public TypeFeedback!: Partial<ChartOptions> | any;
  public TotalReviewComments!: Partial<ChartOptions> | any;
  public TimeSpent!: Partial<ChartOptions> | any;
  public AvgGrade!: Partial<ChartOptions> | any;

  private menuActive : boolean = false;

  constructor(private router : Router) { 

    this.Grades = {
      series: [
        {
          name: "Average Grades Given",
          data: [8, 9, 5, 8, 7, 9, 8]
        },
        {
          name: "Average Grades Received",

          data: [7, 8, 9, 10, 9, 9, 8]
        }
      ],
      chart: {
        type: "bar",
        height: "300"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#2B2D3E"]
        }
      },
      fill: {
        colors: ['#00b2cd', '#ffba00']
      },
      title: {
        text: "Grades per Criteria",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    },
      xaxis: {
        categories: ["Orientation", "In-text citations", "Quality of the primary Sources", "Reference list", "Use of secondary Sources", "New knowledge", "Search term/keywords"]
      }
  };
  
    this.TypeFeedback = {
      series :[40,60],
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ca433c', '#ffba00']
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          UseSeriesColors: true
      }
    },
      title: {
        text: "Type of Feedback",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      labels: ["Suggestions", "Compliments"],
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.TotalReviewComments = {
      series :[40,60],
      chart: {
        type: "pie",
      },
      fill:
        {colors: ['#ca433c','#ffba00']
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.TimeSpent = {
      series :[1],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#ca433c']
      },
      title: {
        text: "Time Spent",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.AvgGrade = {
      series :[90,10],
      chart: {
        type: "pie",
      },
      legend: {
        show: false
      },
      fill:
        {colors: ['#00b2cd','#ca433c']
      },
      title: {
        text: "Average Grade",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.ReadInstructions = {
      series: [1,0],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          colors: '#000'
      },
      },
      fill:
        {colors: ['#00b2cd', '#ca433c']
      },
      title: {
        text: "Read Instructions",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };

    this.HandedIn = {
      series: [1, 0],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          colors: '#000'
      },
      },
      fill:
        {colors: ['#00b2cd', '#ca433c']
      },
      title: {
        text: "Handed in",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };

    this.FinishedFeedback = {
      series: [0, 1],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          colors: '#000'
      },
      },
      fill:
        {colors: ['#ca433c', '#00b2cd']
      },
      title: {
        text: "Finished Feedback",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };

    this.ReadFeedback = {
      series: [0,1],
      chart: {
        type: "donut"
      },
      labels : ["Yes", "No"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90
        }
      },
      grid: {
        padding: {
          bottom: -20,
          axisRight: 20,
          axisLeft: 20
        }
      },
      legend: {
        show: false,
        horizontalAlign: 'center',
        position: 'top',
        labels: {
          UserSeriesColor : true
      },
      },
      fill:
        {colors: ['#ca433c', '#00b2cd']
      },
      title: {
        text: "Read Feedback",
        align: 'center',
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        }
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ]
    };

    
  }

  

  ngOnInit(): void {
  }
  
  navigate(student : string){
    this.router.navigate(['/profile', student]); 
  }

  toggleMenu() {
    let dropdown = document.getElementById("menu");

    if(this.menuActive) {
      dropdown?.classList.add("hidden")
    } else {
      dropdown?.classList.remove("hidden")
    }
  }
}
