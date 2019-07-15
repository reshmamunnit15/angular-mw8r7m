import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls:["employeecount.component.css"]
  })
export class EmployeecountComponent  {

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();  //Custom event 

  @Input()
  all: number;
  @Input()
  female: number;
  @Input()
  male: number;

  onRadioButtonSelectionChanged(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue) //to riase the custom event
    //console.log(this.selectedRadioButtonValue)
  }

}