import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';

import { KpiService } from '../_services/kpi.service';

@Component({
  selector: 'app-view-kpi',
  templateUrl: './view-kpi.component.html',
  styleUrls: ['./view-kpi.component.css']
})
export class ViewKpiComponent implements OnInit {

  constructor(private ks:KpiService) { }
  @Output() currentId: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.getAllKpi();
  }
  arrKpi:any[]=[];
  getAllKpi(){
    this.ks.getKPI().subscribe(
      (data)=>{
        console.log("req get kpi success")
        this.arrKpi=data.response
        console.log(this.arrKpi);
      },(err)=>{console.log(err)})
  }
  onKpiDetails(id:string){
    this.currentId.emit(id)
  }
}
