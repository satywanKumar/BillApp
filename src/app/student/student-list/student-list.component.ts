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

  item:any[] = [];
  isData:boolean = false;


  ngOnInit() {
    this.getStudent();
  
  }
  getStudent()
  {
    this.studentService.getAllStudent().subscribe(res=>{
      this.isData = true;
      console.log(res);
      this.item = res;
    },
    (err)=>{
      this.dialog.open(NoticeComponent, {
        width: '350px',
        data:{alertMsg:err}
      });
    })
  }
  viewDetails(item){
    this.router.navigate(['/dashboard/detail',item.payload.doc.id]);
  }

}
