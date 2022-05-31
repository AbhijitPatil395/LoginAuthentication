import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }
  @ViewChild('canvas') canvas!:ElementRef;
  ngOnInit(): void {
    setTimeout(() => {
      this.draw();
    }, 0);
  }


  draw() {
    var angles=[Math.PI*0.5,Math.PI*0.5,Math.PI*0.1,Math.PI*0.2,Math.PI*0.3,Math.PI*0.4];
    var colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39', '#18FFFF', '#F44336', '#FFF59D', '#6D4C41']
   // var canvas1 = document.getElementById("canvas");
      console.log(this.canvas);
 
    
     const cv =this.canvas.nativeElement;
     console.log(cv)
     var ctx = cv.getContext("2d");
     
     // Our angle
     var biginAngle = 0;
     var endAngle = 0;
     
     for(let i=0;i<angles.length;i++)
     {
       biginAngle=endAngle;
       endAngle=endAngle+angles[i];
       ctx.beginPath();
       ctx.fillStyle = colors[i % colors.length];
     // Go to center of the Chart
     ctx.moveTo(200, 200);
     
     // Draw an Arc
     // arc(centerX, centerY, radius, angleStart, angleEnd)
     ctx.arc(200, 200, 120, biginAngle,endAngle );
     
     // Draw a line to close the pie slice
     ctx.lineTo(200, 200);
     
     // Print the path
     ctx.stroke();
     ctx.fill();
     }
     
     
   }
}