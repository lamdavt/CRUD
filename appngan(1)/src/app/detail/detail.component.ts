import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../model/user';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})  
export class DetailComponent implements OnInit {
  @Input() dataUser: User;
  constructor() { }

  ngOnInit() {
    
  }

}