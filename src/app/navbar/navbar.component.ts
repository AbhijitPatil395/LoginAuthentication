import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ts:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.ts.signOut();
    this.router.navigate(['/']);

  }
  getUserName():string{
    console.log(this.ts.getUserName())
    return this.ts.getUserName();
  }
}
