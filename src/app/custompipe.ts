import{Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:"custompipe"
})
export class customTitlePipe implements PipeTransform{
  transform(val:string, gn:string): string {
    if(gn.toLowerCase()=='male'){
      return "Mr."+ " "+val;
    }
    else{
      return "Miss"+" "+ val;
    }
  }
}