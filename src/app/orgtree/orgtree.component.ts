import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})
export class OrgtreeComponent implements OnInit {

  constructor(private ts:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(!this.ts.getToken())
    this.router.navigate(['/']);

  }

}
