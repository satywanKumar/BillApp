import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  constructor(public facultyService:FacultyService,
              public router:Router) { }

              contactList = [];
              deleteMessage:boolean;
              searchTerm:string;

  ngOnInit() {
    this.getfaculty();
  }

  getfaculty()
  {
    this.facultyService.getContact().subscribe(data=>{
      this.contactList = data.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        };
      });
      console.log(this.contactList);
    });
  }
  deletefaculty($key){
    if(confirm('are you sure want to delete this faculty'))
    {
      this.facultyService.deleteContact($key);
      this.getfaculty();
      this.deleteMessage=true;
      setTimeout(()=>this.deleteMessage=false,1000);
    }
  }
  createRoute()
  {
    this.router.navigate(['/createfaculty']);
  }

}
