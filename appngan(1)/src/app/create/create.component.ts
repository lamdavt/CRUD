import { Result } from './../../model/result';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../../model/user';
import { UserService } from '../../services/User.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() reload = new EventEmitter();
  user: User = {username: "", password: "", fullname: "", phone: "", address: "", active: 1};
  results: Result = {message: ""};

  constructor(private allApiService: UserService) { }

  ngOnInit(): void {

  }

  sendValues(): void {
    this.allApiService.createUser(this.user).subscribe(result => {
      if (result.message == "Success") {
      this.reload.emit();
      window.document.getElementById("id01").style.display='none';
      }
      this.results.message = result.message;
    });
  }
}
 