import { UserService } from './../../services/User.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Result } from '../../model/result';

@Component({
  selector: 'app-main',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource: User[];
  dataUser : User;
  results: Result = {message: ""};
  constructor(private getAllApi: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUserById(id : number)  {
    this.getAllApi.getUserById(id)
    .subscribe(user =>{
      this.dataUser = user;
     });
  }

  deleteHeroes(id: number): void {
    this.getAllApi.deleteUser(id)
      .subscribe(result => {
        if (result.message == "Success") {
         this. results = {message: ""};
        }
        this.results.message = result.message;
      });
    
  }

  getUsers(): void {
    this.getAllApi.getUsers()
      .subscribe(users => this.dataSource = users);
  }

 

}
