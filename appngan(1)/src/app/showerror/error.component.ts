import { Component, Input } from '@angular/core';
@Component({
    selector:'ng-error',
    templateUrl:'error.component.html',
    styleUrls:['error.component.css']
})
export class ErrorComponent{
    @Input() errormessage;
     
}