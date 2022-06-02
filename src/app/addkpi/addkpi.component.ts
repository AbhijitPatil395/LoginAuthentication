import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KpiService } from '../_services/kpi.service';
import { NgSelectModule } from "@ng-select/ng-select"
import { NgModule } from "@angular/core";
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-addkpi',
  templateUrl: './addkpi.component.html',
  styleUrls: ['./addkpi.component.css']
})
export class AddkpiComponent implements OnInit {

  dropdownSettings:IDropdownSettings={};
  //drop:FormGroup  ;
  dropdownList:any[] = [];
  constructor(private fb:FormBuilder,private kpi:KpiService) { }

  arrDepartments:any[]=[];
  arrDataCaptureFreq:any[]=[];
  arrReviewFreq:any[]=[];
  arrReviewFreqFiltered:any[]=[];
  arrPerspectives:any[]=[];
  arrTypes:any[]=[];
  arrCategory:any[]=[];
  arrFinancialYear:any[]=[];
  arrMonthRange:any[]=[];
  arrMonthNames:any[]=[];
  dataCapFreq:number=0;
  selectedMonths:any[]=[];

  captureDateGroup:any[]=[];
  months:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


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
      // captureData: [
      //         [{
      //             target: 0,
      //             lower: 0,
      //             upper: 0,
      //             startDate: "2022-05-01T00:00:00",
      //             endDate: "2022-05-31T23:59:59",
      //             indicator: 2,
      //             disabled: false,
      //             upperValueType: "ABSOLUTE",
      //             lowerValueType: "ABSOLUTE"
      //         }]
      // ],
      captureData: this.fb.array([
        // this.fb.group({
        //           target: 0,
        //           lower: 0,
        //           upper: 0,
        //           startDate: "2022-05-01T00:00:00",
        //           endDate: "2022-05-31T23:59:59",
        //           indicator: 2,
        //           disabled: false,
        //           upperValueType: "ABSOLUTE",
        //           lowerValueType: "ABSOLUTE"
        // })
      ]),
      unitOfMeasurement: "606573e173d7e41e2e59a4ab",
      goalFormula: null,
      isActive: true,
      owners: {
          individuals: [
                  {
                      employeeId: "abhijit.patil",
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
get captureData() {
  return this.kpiForm.get('captureData') as FormArray;
}

  ngOnInit(): void {
    this.getDepartments();
    this.getDataCaptureFreq();
    this.getDataRevieewFreq();
    this.getPerspectives();
    this.getTypes();
    this.getCategory();
    this.getFinancialYear();
    this.getMonthRange();
    this.dropdownList = [
      { id: 1, item_text: 'January' },
      { id: 2, item_text: 'February' },
      { id: 3, item_text: 'March' },
      { id: 4, item_text: 'April' },
      { id: 5, item_text: 'May' },
      { id: 6, item_text: 'June' },
      { id: 7, item_text: 'Jully' },
      { id: 8, item_text: 'August' },
      { id: 9, item_text: 'September' },
      { id: 10, item_text: 'October' },
      { id: 11, item_text: 'November' },
      { id: 12, item_text: 'December' }
     
    ];
    //  this.dropdownList=this.arrMonthNames;
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      disabledField:'1'
    
    };
  }
  onSubmit()
  {
    this.kpi.postKPI(this.kpiForm.value).subscribe(
        (data)=>{ alert("KPI successfully created!!!")},
        (err)=>{console.log("problem in kpi posting!!!!!")})
    console.log(this.kpiForm.value)
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
  getArrFinancialYears():any[]{
    return this.arrFinancialYear;
  }
  getArrMonthRange():any[]{
    return this.arrMonthNames;
  }
  getArrSelectedMonths():any[]{
    return this.selectedMonths;
  }




  //--------------------------------------------------------------------------------
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
  getFinancialYear(){
    this.kpi.getFinancialYear().subscribe((data)=>
    {console.log("financial year");
    this.arrFinancialYear=data.response.filter((elem:any)=>elem.startUnix>=1648751400000)
    console.log(this.arrFinancialYear)},
    (err)=>{console.log("financial year"+err)})
  }
  getMonthRange(){
    this.kpi.getMonthRange().subscribe((data)=>{console.log("Month Range");
    this.arrMonthRange=data.response;console.log(this.arrMonthRange);
    this.arrMonthRange.map((elem)=>{this.arrMonthNames.push({id:new Date(elem.start).getMonth()+1,name:this.months[new Date(elem.start).getMonth()]})});
    console.log(this.arrMonthNames);console.log(this.dropdownList)},
    (err)=>{console.log("financial year"+err)})

  }

  setDataCapFreq(event:any){
    console.log(event.target.value)
    this.dataCapFreq=event.target.value;
    console.log(this.dataCapFreq);
    let capFreq=this.arrDataCaptureFreq.find((elem:any)=>elem._id==this.dataCapFreq).order;
    if(capFreq<=5)
    {
    console.log(capFreq)
    this.arrReviewFreqFiltered=this.arrReviewFreq.filter((elem:any)=>elem.order>=capFreq);
    }
    else{
      this.arrReviewFreqFiltered=this.arrReviewFreq.filter((elem:any)=>elem.order>=capFreq-1);
    }
  }
  setFinancialYear(event:any){
      console.log(event)
    
  }
  setMonthsRange(event:any)
  {
    console.log(event)
    console.log(this.selectedMonths)
    let strt=this.arrMonthRange.find((e)=>(new Date(e.startUnix).getMonth())==event.id-1).start;
    let end=this.arrMonthRange.find((e)=>(new Date(e.startUnix).getMonth())==event.id-1).end;
    console.log(strt+" to "+end)
    const captureDataGroup = this.fb.group({
                target: 0,
                lower: 0,
                upper: 0,
                startDate: strt+"T00:00:00",
                endDate: end+"T23:59:59",
                indicator:event.id,
                disabled: false,
                upperValueType: "ABSOLUTE",
                lowerValueType: "ABSOLUTE"
    });
    this.captureData.push(captureDataGroup);
    
  }
  deSelectMonthsRange(event:any){
    console.log(event.value.id);
    this.selectedMonths=this.selectedMonths.filter((e)=>e.id!=event.id);
    // console.log(this.selectedMonths)
    // console.log("index"+(event.index-1))
    //this.captureData.value=this.captureData.value.filter((elem:any)=>elem.indicator!=event.value.id);
    
    
    //this.captureData.removeAt(event.value.id-1);
    // console.log(this.captureData.value)
  }
  removeAt(i:number){
    this.captureData.removeAt(i);

    console.log(this.captureData.value)
  }

  
}
