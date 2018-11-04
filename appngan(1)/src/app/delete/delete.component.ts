import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { User } from '../../model/user';
import { Result } from '../../model/result';
import { UserService } from '../../services/User.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() dataUser: User;
  @Output() reload = new EventEmitter();
  results: Result = {message: ""};
  constructor(private getAllApi: UserService) { }

  ngOnInit() {
  }

  deleteHeroes(id: number): void {
    this.getAllApi.deleteUser(id)
      .subscribe(result => {
        if (result.message == "Success") {
         this.reload.emit();
      
        }
        this.results.message = result.message;
      });
    
  }
}
