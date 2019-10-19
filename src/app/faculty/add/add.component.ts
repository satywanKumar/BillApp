import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public facultyService:FacultyService,
    private router:Router) { }

    submitted:boolean;
    formControls = this.facultyService.form.controls;
    showSuccessMessage:boolean;


  ngOnInit() {
    this.facultyService.getContact();
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.facultyService.form.valid)
    {
      if(this.facultyService.form.get('$key').value == null)
      {
        console.log('new',this.facultyService.form.value);
        this.facultyService.insertContact(this.facultyService.form.value);
      }  
      else
      {
        this.facultyService.updateContact(this.facultyService.form.value);
        console.log('added successfully');
      }
       this.showSuccessMessage = true;
       setTimeout(()=> this.showSuccessMessage = false,3000);
      this.submitted = false;
      this.facultyService.form.reset();
      this.router.navigate(['/']);
      
    }
  }

}
