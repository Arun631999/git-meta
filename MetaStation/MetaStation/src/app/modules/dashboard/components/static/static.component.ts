import { Component } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent {
  basicOptions: any;
  lineStylesData: any;
  value1: any;
  value2: any;
  public chart: any;
  id : number = 1;
  visible: boolean = false;
  subscriptionPlans: any[] = [];

  selectedCity: any | undefined;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
date: Date | undefined;
commonOptions = [
  { name: 'Spot market', code: 'NY' },
  { name: 'Future market', code: 'RM' },
  { name: 'Margin market', code: 'LDN' }
];

ngOnInit() {
  this.basicOptions = {
    bezierCurve: false,
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#ebedef',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef',
          fontSize: 40,
          font: {
            family: 'Euclid Circular A', // Your font family
            size: 14,
          },
          fontFamily: 'Euclid Circular A',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0)',
        },
      },
      y: {
        ticks: {
          color: '#ebedef',
          fontSize: 40,
          font: {
            family: 'Euclid Circular A', // Your font family
            size: 14,
          },
          fontFamily: 'Euclid Circular A',
          callback: (label: string, index: any, labels: any) => {
            return '$' + label + ' ' + 'T';
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0)',
        },
      },
    },
  };

  this.lineStylesData = {
    labels: [
      'Sep’21',
      'Oct’21',
      'Nov’21',
      'Dec’21',
      'Jan’22',
      'Feb’22',
      'Mar’22',
      'Apr’22',
      'Mar’22',
      'May’22',
      'Jun’22',
      'Jul’22',
      'Aug’22',
    ],

    datasets: [
      {
        label: 'Third Dataset',
        data: [12, 51, 62, 33, 21, 62, 45, 50, 90, 40, 30, 20, 10],
        fill: true,
        borderColor: '#3C71FB',
        tension: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointRadius: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

}

deltePlan(index : any) {
  console.log(index);
  this.subscriptionPlans.splice(this.subscriptionPlans.indexOf(index.id), 1);
}

onCLickedButton(id: number) {
  this.id = id;
}

openSubscriptionDilaog() {
  this.visible = true;
}

createChart() {
  var myCanvas: any = document.getElementById('MyChart6');
  var ctx = myCanvas.getContext('2d');
  var gradient = ctx.createLinearGradient(
    0,
    myCanvas.height,
    0,
    myCanvas.width
  );
  gradient.addColorStop(0, 'rgb(60, 113, 251, 0.2)');
  gradient.addColorStop(1, 'rgba(85, 110, 173, 0)');

  // this.chart = new Chart('MyChart6', {
  //   type: 'line', //this denotes tha type of chart

  //   data: {
  //     // values on X-Axis
  //     labels: [
  //       'Sep’21',
  //       'Oct’21',
  //       'Nov’21',
  //       'Dec’21',
  //       'Jan’22',
  //       'Feb’22',
  //       'Mar’22',
  //       'Apr’22',
  //       'Mar’22',
  //       'May’22',
  //       'Jun’22',
  //       'Jul’22',
  //       'Aug’22',
  //     ],
  //     datasets: [
  //       {
  //         data: [60, 51, 62, 33, 21, 62, 45, 50, 90, 40, 30, 20, 10],
  //         borderColor: '#3C71FB',
  //         backgroundColor: gradient,
  //         pointRadius: 0,
  //         borderWidth: 2,
  //         fill: true,
  //       },
  //     ],
  //   },
  //   options: {
  //     maintainAspectRatio: false,
  //     aspectRatio: 16.1,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           color: '#ebedef',
  //           font: {
  //             family: 'Euclid Circular A', // Your font family
  //             size: 14,
  //           },
  //         },
  //         grid: {
  //           color: 'rgba(0, 0, 0, 0)',
  //         },
  //       },
  //       y: {
  //         ticks: {
  //           stepSize: 40,
  //           color: '#ebedef',
  //           // fontSize: 40,
  //           font: {
  //             family: 'Euclid Circular A', // Your font family
  //             size: 14,
  //           },
  //           callback: function (val, index) {
  //             return '$' + val + ' ' + 'T';
  //           },
  //         },
  //         grid: {
  //           color: 'rgba(112, 118, 136, 0.13)',
  //         },
  //       },
  //     },
  //   },
  // });
}

ngAfterViewInit(): void {
  var myCanvas: any = document.getElementById('MyChart6');
  var ctx = myCanvas.getContext('2d');
  console.log(ctx);

  this.createChart();
}

}
