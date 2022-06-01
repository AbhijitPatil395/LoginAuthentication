import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KpiService } from '../_services/kpi.service';

@Component({
  selector: 'app-addkpi',
  templateUrl: './addkpi.component.html',
  styleUrls: ['./addkpi.component.css']
})
export class AddkpiComponent implements OnInit {

  constructor(private fb:FormBuilder,private kpi:KpiService) { }

  arrDepartments:any[]=[];
  arrDataCaptureFreq:any[]=[];
  arrReviewFreq:any[]=[];
  arrReviewFreqFiltered:any[]=[];
  arrPerspectives:any[]=[];
  arrTypes:any[]=[];
  arrCategory:any[]=[];
  dataCapFreq:number=0;



kpiForm = this.fb.group(
  {
      title: ['',[Validators.required]],   //Validators.minLength(4)
      departmentId: ['',[Validators.required]],    //Validators.minLength(4)
      dataCaptureFrequency:['',[Validators.required]],
      reviewFrequency:['',[Validators.required]],
      goalDescription:[''],
      perspective:['',[Validators.required]],
      remark:[''],
      annualTarget: 100,
      actionLimit: "MANUAL",  
      category: "5ea2c50f1d4ec94491c08030",
      isTypeKPI: true,
      type: "606573e173d7e41e2e59a4b0",
      parentId: null,
      perspectivePrefix: "I",
      directionOfGoodness: "Up",
      ytdCalculation: "SUM",
      weightage: 1,
      captureData: [
              [{
                  target: 0,
                  lower: 0,
                  upper: 0,
                  startDate: "2022-05-01T00:00:00",
                  endDate: "2022-05-31T23:59:59",
                  indicator: 2,
                  disabled: false,
                  upperValueType: "ABSOLUTE",
                  lowerValueType: "ABSOLUTE"
              }]
      ],
      unitOfMeasurement: "606573e173d7e41e2e59a4ab",
      goalFormula: null,
      isActive: true,
      owners: {
          individuals: [
                  {
                      employeeId: "vikas.raut",
                      isPrimary: true
                  }
              ]
          },
          viewers: {
              individuals: [],
              groups: []
          },
      financialYearStart: 1648751400000,
      financialYearEnd: 1680287399000,
      dataAggregationFrequency: "62833d7b412ac9eebe3a3c17",
      dataAggregationMethod: "SUM"
}); 

  ngOnInit(): void {
    this.getDepartments();
    this.getDataCaptureFreq();
    this.getDataRevieewFreq();
    this.getPerspectives();
    this.getTypes();
    this.getCategory();
  }
  onSubmit()
  {this.kpi.postKPI(this.kpiForm.value).subscribe(
        (data)=>{ console.log("KPI successfully created!!!")},
        (err)=>{console.log("problem in kpi posting!!!!!")})
   console.log("in on submit");
  }

  getArrDepts():any[]{
    return this.arrDepartments;
  }
  getArrDataCapFreq():any[]{
    return this.arrDataCaptureFreq;
  }
  getArrReviewFreq():any[]{
    return this.arrReviewFreqFiltered;
  }
  getArrPerspectives():any[]{
    return this.arrPerspectives;
  }
  getArrTypes():any[]{
    return this.arrTypes;
  }
  getArrCategory():any[]{
    return this.arrCategory;
  }
  getDepartments(){
    this.kpi.getDepartments().subscribe((data)=>{
      this.arrDepartments=data.response;
      console.log(this.arrDepartments);
    },
    (err)=>{console.log(err);})
  }
  getDataCaptureFreq(){
    this.kpi.getDataCaptureFreq().subscribe((data)=>{
      this.arrDataCaptureFreq=data.response;
      console.log(this.arrDataCaptureFreq);
    },
    (err)=>{console.log(err);})
  }
  getDataRevieewFreq(){
    this.kpi.getReviewFreq().subscribe((data)=>{
      this.arrReviewFreq=data.response;
      this.arrReviewFreqFiltered=data.response;
      console.log(this.arrReviewFreq);
    },
    (err)=>{console.log(err);})
  }
  getPerspectives(){
    this.kpi.getPerspectives().subscribe((data)=>{
      this.arrPerspectives=data.response;
      console.log(this.arrPerspectives);
    },
    (err)=>{console.log(err);})
  }
  getTypes(){
    this.kpi.getTypes().subscribe((data)=>{
      this.arrTypes=data.response;

      console.log(this.arrTypes);
    },(err)=>{console.log(err);})
  }
  getCategory(){
    this.kpi.getCategory().subscribe((data)=>{
      this.arrCategory=data.response;
      console.log(this.arrCategory);
    },(err)=>{console.log(err);})
  }


  setDataCapFreq(event:any){
    console.log(event.target.value)
    this.dataCapFreq=event.target.value;
    console.log(this.dataCapFreq);
    let capFreq=this.arrDataCaptureFreq.find((elem:any)=>elem._id==this.dataCapFreq).order;
    console.log(capFreq)
    this.arrReviewFreqFiltered=this.arrReviewFreq.filter((elem:any)=>elem.order>=capFreq);
  }

}
