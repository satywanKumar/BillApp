import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { NoticeComponent } from 'src/app/notice/notice.component';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  constructor(public facultyService:FacultyService,
              public router:Router,
              public dialog:MatDialog,
              ) { }

              facultyList = [];
              deleteMessage:boolean;
              searchTerm:string;
              isData:boolean = false;

  ngOnInit() {
    this.getfaculty();
  }

  getfaculty()
  {
    this.facultyService.getFaculty().subscribe(data=>{
      this.isData = true;
      this.facultyList = data.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        };
      });
      console.log(this.facultyList);
    });
  }
  deletefaculty($key){
    if(confirm('are you sure want to delete this faculty'))
    {
      this.facultyService.deleteFaculty($key);
      this.getfaculty();
      this.deleteMessage=true;
      setTimeout(()=>this.deleteMessage=false,1000);
    }
  }
  createRoute()
  {
    this.router.navigate(['/createfaculty']);
  }

  viewDetails(id)
  {
    this.router.navigate(['/dashboard/faculty-detail',id]);
  }

  edit(faculty)
  {
    this.facultyService.populateForm(faculty)
  }
  delete(id)
 {
  const dialogRef = this.dialog.open(ConfirmDialogComponent,{
    data:{alertMsg:'Are you sure want to delete this job ?'}
   });

  dialogRef.afterClosed().subscribe(res=>{
    if(res)
    {
      this.facultyService.deleteFaculty(id);
      this.getfaculty();
    }
  },
  (err)=>{
    this.dialog.open(NoticeComponent,{
      data : {lertMsg:'can not delte.. please try again'}
    })
  })
 }
}
