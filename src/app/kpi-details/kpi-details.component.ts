import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { KpiService } from '../_services/kpi.service';

@Component({
  selector: 'app-kpi-details',
  templateUrl: './kpi-details.component.html',
  styleUrls: ['./kpi-details.component.css']
})
export class KpiDetailsComponent implements OnInit,OnChanges {
  @Input() kpi_id:string='';
  arrKpi:any[]=[];
  currentKpi={
    "_id": "",
  "title": "",
  "departmentId": "",
  "dataCaptureFrequency": "",
  "type": "",
  "directionOfGoodness": "Up",
  "ytdCalculation": "SUM",
  "unitOfMeasurement": "606573e173d7e41e2e59a4ab",
  "isActive": true,
  "financialYearStart": 1648751400000,
  "financialYearEnd": 1711909799000,
  "isDraft": false,
  "isApproved": true,
  "extensionId": "9db12866-b307-4a6a-951d-03a4abc7b149",
  "goalTag": "C1",
  "id": "17cef7dd-77ea-4a41-8883-42299fce5673",
  "goalId": "fb095fac-9ce7-4f45-8427-9f4e93c609bf",
  "ownerEmployeeId": "abhijit.patil",
  "ownerSupervisorId": "vikas.raut",
  "ownerFirstname": "Abhijit",
  "ownerLastname": "Patil",
  "departmentName": "Central Engineering"
  };
  title:string='';
  constructor(private ks:KpiService) { }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.getAllKpi();
  }
  getAllKpi(){
    this.ks.getKPI().subscribe(
      (data)=>{
        console.log("req get kpi success")
        this.arrKpi=data.response
        console.log(this.arrKpi);
        this.currentKpi= this.arrKpi.find((e:any)=>e._id==this.kpi_id);
        this.title=this.currentKpi.title;
        console.log(this.currentKpi)
      },(err)=>{console.log(err)})
  }


}
