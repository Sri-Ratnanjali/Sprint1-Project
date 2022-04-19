import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorDetails } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {
doctorData: DoctorDetails= new DoctorDetails();
  constructor(private http: HttpClient) { }

  doctorDetails=[{
    id:1,
    doctorName:"Dr.Narendra Varma",
    doctorDetails:"Dermotologist",
    ConsultanceFee:500,
    doctorImg:"https://thumbs.dreamstime.com/z/indian-doctor-28013008.jpg"
     },
     {
      id:2,
      doctorName:"Dr.Anjali Kumari",
      doctorDetails:"Gynocologist",
      ConsultanceFee:1000,
      doctorImg:"https://visage-aesthetics.com/wp-content/uploads/2016/04/shutterstock-indian-doctor-.jpg"
     },
     {
      id:3,
      doctorName:"Dr.Abhijeet Singh",
      doctorDetails:"cardiologist",
      ConsultanceFee:500,
      doctorImg:"https://thumbs.dreamstime.com/b/indian-doctor-21487084.jpg"
     },
     {
      id:4,
      doctorName:"Dr.Meena Pandey",
      doctorDetails:"Dentist",
      ConsultanceFee:1000,
      doctorImg:"https://thumbs.dreamstime.com/b/doctor-indian-38175791.jpg"
     }
    ]
    //baseURL: string="https://localhost:44333/api/DoctorDetails/";


  getDoctorDetails(){
    const headers=new HttpHeaders()
    .set('control-type','application/json')
    .set('access-control-allow-origin','*');

    const param=new HttpParams()
    .set('name','pen')
    .set('pageNo',5);
    return this.http.get("https://localhost:44333/api/DoctorDetails/GetAll",{headers:headers});
    //return this.http.get<DoctorDetails>(this.baseURL + "GetDoctors");
  }
  getDoctorBySpecialization(specialization:string){


      const headers=new HttpHeaders()
      .set('control-type','application/json')
      .set('access-control-allow-origin','*');

      return this.http.get(`https://localhost:44333/api/DoctorDetails/GetBySpecialization/${specialization}`,{headers:headers});
     //return this.http.get<DoctorDetails>(this.baseURL + `GetBySpecialization/${specialization}`);

     }
     createDoctor(){
      //const headers=new HttpHeaders()
      //.set('control-type','application/json')
      //.set('access-control-allow-origin','*');


       return this.http.post("https://localhost:44333/api/DoctorDetails/Create",this.doctorData);
     }
    }




