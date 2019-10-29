import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';


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

   item:any = {};
   mychart=[];
   isData:boolean = false;

  ngOnInit() {
    this.getStudent();
  }

  getStudent()
  {
    let id = this._activeRoute.snapshot.params['id'];
    console.log(id);
    // this.item = this.studentService.getStudent(id).pipe(map(res=>res.payload.val()));
    // console.log(this.item);
    this.studentService.getStudent(id).subscribe(res=>{
      this.isData = true;
      this.item = res;
      console.log(res.payload.val().btech1st);
      var a = res.payload.val().btech1st;
      var b = res.payload.val().btech2nd;
      var c = res.payload.val().btech3rd;
      var d = res.payload.val().btech4th;
      var e = res.payload.val().btech5th;
      var f = res.payload.val().btech6th;
      var g = res.payload.val().btech7th;
      var h = res.payload.val().btech8th;

      console.log(a,b,c,d,e,f,g,h);
      this.showChart(a,b,c,d,e,f,g,h);

    });
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


  delete(id)
  {
    this.studentService.deleteStudent(id);
    this.router.navigate(['/dashboard/student'])
  }

  edit(data)
  {
    this.studentService.populateForm(data);
  }


  print(id)
  {
    //console.log(id);
    var printContent = document.getElementById(id).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    location.reload();
  }

  

}
