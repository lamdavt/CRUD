import { Answers } from './../../../model/answer';
import { TopicService } from './../../../services/Topic.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'answer-create',
    templateUrl: 'createAnswer.component.html'
    
})

export class CreateAnswerComponent {

    @Input() idQuestion: any;

    @Output() reload = new EventEmitter(); 
    
    constructor(private useservice : TopicService  ){

    }

    yourAnswer: Answers={
        id: null,
        answer: '',
        idQuestion: null
    };

    createAnswer(){
       this.yourAnswer.idQuestion = this.idQuestion;

       this.useservice.createAnswer(this.yourAnswer).subscribe(()=>this.reload.emit());
       
    }
    
    

}
