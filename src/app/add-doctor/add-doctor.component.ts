import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookappointmentService } from '../services/bookappointment.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(public bookappointmentService: BookappointmentService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(doctorForm:NgForm){
    this.bookappointmentService.createDoctor().subscribe({
      next:(data)=>{},
      complete:()=>{this.router.navigate(['/search/'])},
      error:(err)=>{console.log("Unable to add" + err);}
      //{this.router.navigate(['/search/'])}
    })
  }

}
