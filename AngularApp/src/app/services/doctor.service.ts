import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    public _http:HttpClient,
    public router:Router

  ) { }

  addDoctor(doctor:any){
    return this._http.post<any>("http://localhost:3000/add-new-doctor", doctor);
  }
  doctorImage(id:string,image:any){

    return this._http.post<any>("http://localhost:3000/doctor/"+id+"/uploadPhoto", image);
  }

  getAllDoctors():Observable<any>{
    return this._http.get<any>("http://localhost:3000/get-all-doctors");
  }

}
