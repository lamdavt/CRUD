import { UserService } from './../../services/User.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

import { Result } from '../../model/result';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 
  @Input() dataUser: User;
@Output() reload = new EventEmitter();
  results: Result = {message: ""};
  constructor(private allApiService: UserService) { }

  ngOnInit(): void {
  }


  sendValues(): void {
    this.allApiService.updateUser(this.dataUser).subscribe(result => {
      if (result.message == "Success") {
       this.reload.emit();
       window.document.getElementById("updateform").style.display='none';
      }
      this.results.message = result.message;
    });
  }

}
