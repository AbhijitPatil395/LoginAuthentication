import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../_services/kpi.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})


export class OrgtreeComponent implements OnInit {

  constructor(private ks:KpiService,private ts:TokenStorageService,private router:Router) { }
  arr:any[]=[];
  tree:any[]=[];

  ngOnInit(): void {
    this.ks.getTreeDetails().subscribe((data)=>{
      console.log(data.response);
      this.arr=data.response;
      // this.arr[5].userHierarchy='ameya.gholap/vikas.raut';
      // this.arr[4].userHierarchy='ameya.gholap'
      // this.arr[4].primaryUserId='ameya.gholap'
      console.log(this.arr)
      let arrNames:string[]=[];
      let map=new Map<string,number>();
      
      for (let i = 0; i < this.arr.length; i += 1) {
          map.set(this.arr[i].primaryUserId,i);
          this.arr[i].child=[];
      }
      for (let i = 0; i < this.arr.length; i += 1) 
      {
        arrNames=this.arr[i].userHierarchy.split('/');
        let len=arrNames.length;
        if(len>1)
        {
          let n=len-2;
          let name=arrNames[n];
          if(name)
          {
          var index=map.get(name)
          }
          if(index)
          this.arr[index].child.push(this.arr[i]);
        }
        else{
          this.tree.push(this.arr[i]);
        }
      }
      
      console.log(this.tree)
    })
  }

}
