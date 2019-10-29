import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.css']
})
export class FacultyDetailComponent implements OnInit {

  constructor(public _activeRoute:ActivatedRoute,
              public facultyService:FacultyService) { }
  item:any = {};

  ngOnInit() {
    this.getfacultyDetail();
  }

  getfacultyDetail()
  {
    let id = this._activeRoute.snapshot.params['id'];
    console.log(id);
    this.facultyService.getFacultyById(id).subscribe(res=>{
      this.item = res;
    })
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
