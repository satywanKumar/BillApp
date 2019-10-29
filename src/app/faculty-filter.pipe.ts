import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facultyFilter'
})
export class FacultyFilterPipe implements PipeTransform {

  transform(facultyList:any[],searchTerm:string): any[] {
    if(!facultyList || !searchTerm)
    {
      return facultyList;
    }
    return facultyList.filter(facultyList=>
      facultyList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
