import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dept_API ='https://dev-api.tqmi.io/setting-management/api/departments'
const dataCaptureFrequency_API='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency'
const reviewFrequency_API='https://dev-api.tqmi.io/setting-management/api/data-review-frequency'
const perspective_API='https://dev-api.tqmi.io/setting-management/api/perspectives'
const create_KPI='https://dev-api.tqmi.io/org-goal-management/api/goal'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http:HttpClient) { }

  getDepartments():Observable<any>{
     return this.http.get(dept_API);
  }
  getDataCaptureFreq():Observable<any>{
    return this.http.get(dataCaptureFrequency_API);
  }
  getReviewFreq():Observable<any>{
    return this.http.get(reviewFrequency_API);
  }
  getPerspectives():Observable<any>{
    return this.http.get(perspective_API);
  }
  postKPI(kpi:any):Observable<any>{
    console.log(JSON.stringify(kpi));
    return this.http.post(create_KPI,kpi,httpOptions);
  }
}
