import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    employees:any[];

    selectedradiovalue: string="All";
  constructor() { 
    this.employees=[
      {code:"emp001",name:"reshu",gender:"Female",salary:1.8+"l",dob:1995},
      {code:"emp002",name:"gousia",gender:"Female",salary:3.8+"l",dob:1986},
      {code:"emp003",name:"sailaja",gender:"Female",salary:3+"l",dob:1987},
      {code:"emp004",name:"bhaskar",gender:"Male",salary:3.9+"l",dob:1980},
      {code:"emp005",name:"ranjan",gender:"Male",salary:6+"l",dob:1991},
       {code:"emp006",name:"roashna",gender:"Female",salary:4+"l",dob:1991}
    ]
  }
  compemployeechange(originalvalue : string): void {
    this.selectedradiovalue = originalvalue;
    
  }
  getallemployeecount():number{
    
    return this.employees.length;
  }
    getmaleemployeecount():number{
    return this.employees.filter(function(m){return m.gender==='Male'}).length;
  }
    getfemaleemployeecount():number{
    return this.employees.filter(f=>f.gender==='Female').length;
  }
}
