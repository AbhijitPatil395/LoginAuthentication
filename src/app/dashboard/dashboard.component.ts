import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ts:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.ts.signOut();
    this.router.navigate(['/']);
  }
}
