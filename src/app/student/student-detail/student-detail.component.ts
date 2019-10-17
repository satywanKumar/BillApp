import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(public _activeRoute:ActivatedRoute,
             public studentService : StudentService,
             public router : Router,
             public dialog : MatDialog) { }
  id:string = '';
  item:any;
  isData:boolean = false;
  mychart=[];

  ngOnInit() {
    this.id = this._activeRoute.snapshot.params['id'];
    console.log(this.id);
    this.studentService.getStudent(this.id).subscribe(res=>{
      // console.log('result',res);
  
      this.item = res;
      this.isData = true;
      console.log('item',this.item);
      var a = this.item.btech1st;
      var b = this.item.btech2nd;
      var c = this.item.btech3rd;
      var d = this.item.btech4th;
      var e = this.item.btech5th;
      var f = this.item.btech6th;
      var g = this.item.btech7th;
      var h = this.item.btech8th;
      console.log(a,b,c,d,e,f,g,h);
      this.showChart(a,b,c,d,e,f,g,h)
    })
  }

  showChart(a,b,c,d,e,f,g,h)
  {
    this.mychart = new Chart('canvas', {
      type: 'bar',
      data: {
          labels: ['1st', '2nd', '3rd', '4th', '5th', '6th','7th','8th'],
          datasets: [{
              label: 'CGPA of all semester',
              data: [a, b, c, d, e, f,g,h],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(153, 102, 255, 0.2)'


              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  // delete(){
  //   this.studentService.deleteStudent(this.id).then(res=>{
  //     console.log(res);
  //     this.router.navigate(['/dashboard/student'])
  //   })
  // }

  delete()
  {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data:{alertMsg:'Are you sure want to delete this job ?'}
    });

    dialogRef.afterClosed().subscribe(res=>{
      // //console.log(res);
      if(res)
      {
        //console.log(jobId);
        this.studentService.deleteStudent(this.id).then(res=>{
          //console.log(response);
          console.log(res);
          this.router.navigate(['/dashboard/student']);
        })    
      }
    })
    
  }


  

}
