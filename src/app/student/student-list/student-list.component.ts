import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NoticeComponent } from 'src/app/notice/notice.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public studentService:StudentService,
              public router:Router,
              public dialog:MatDialog) { }

      studentList = [];
      deleteMessage:boolean;
      searchTerm:string;
      isData:boolean = false;


  ngOnInit() {
    this.getStudent();
  
  }
  getStudent()
  {
    this.studentService.getAllStudent().subscribe(data=>{
      this.isData = true;
      this.studentList = data.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        };
      });
      console.log(this.studentList);
    });
  }

 viewDetails(id)
 {
   console.log(id);
   this.router.navigate(['/dashboard/student-detail',id]);
 }

 edit(student){
   this.studentService.populateForm(student);
 }
}
