import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KpiDetailsComponent } from '../kpi-details/kpi-details.component';
import { user } from '../user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{

  constructor(private ts:TokenStorageService,private router:Router,private as:AuthService) { }
  arrUsers:user[]=[];
  kpi_Id:string='';
  ngOnInit(): void {
  }
  @ViewChild('kd') kdChild:any;
  onLogout(){
    this.ts.signOut();
    this.router.navigate(['/login']);
  }
  getUsers(){
    this.as.getUsers().subscribe(
      (data)=>{
        console.log(data)
        this.arrUsers=data.data;
        console.log(this.arrUsers)
      }
    )
   
  }
  changeCurrentId(event:any){
    this.kpi_Id=event;
    console.log("in dash board:"+this.kpi_Id);
    //this.kdChild.getAllKpi();

  }
}
