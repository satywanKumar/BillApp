import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(studentList:any[],fullName:string,reggNo:string,batch:string): any {
    if (studentList && studentList.length){
      return studentList.filter(item =>{
          if (fullName && item.name.toLowerCase().indexOf(fullName.toLowerCase()) === -1){
              return false;
          }
          if (reggNo && item.reggNo.toLowerCase().indexOf(reggNo.toLowerCase()) === -1){
              return false;
          }
          if (batch && item.batch.toLowerCase().indexOf(batch.toLowerCase()) === -1){
            return false;
        }
          return true;
     })
  }
  else{
      return studentList;
  }
  }

}
