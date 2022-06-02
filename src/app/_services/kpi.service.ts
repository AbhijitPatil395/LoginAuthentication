import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const dept_API ='https://dev-api.tqmi.io/setting-management/api/departments'
const dataCaptureFrequency_API='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency'
const reviewFrequency_API='https://dev-api.tqmi.io/setting-management/api/data-review-frequency'
const perspective_API='https://dev-api.tqmi.io/setting-management/api/perspectives'
const create_KPI='https://dev-api.tqmi.io/org-goal-management/api/goal'
const types_API='https://dev-api.tqmi.io/setting-management/api/kpi-types';
const category_API='https://dev-api.tqmi.io/setting-management/api/kpi-categories'
const get_KPI='https://dev-api.tqmi.io/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true'
const get_financialYear_API='https://dev-api.tqmi.io/setting-management/api/financial-years-list'
const get_Month_Range_API='https://dev-api.tqmi.io/setting-management/api/month-range'
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
  getTypes():Observable<any>{
    return this.http.get(types_API);
  }
  getCategory():Observable<any>{
    return this.http.get(category_API);
  }
  postKPI(kpi:any):Observable<any>{
    return this.http.post(create_KPI,kpi,httpOptions);
  }
  getKPI():Observable<any>{
    return this.http.get(get_KPI);
  }
  getFinancialYear():Observable<any>{
    return this.http.get(get_financialYear_API);
  }
  getMonthRange():Observable<any>{
    return this.http.get(get_Month_Range_API);
  }
}
