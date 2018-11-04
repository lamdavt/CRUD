import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TopicService } from 'services/Topic.service';
import { Answers } from 'model/answer';

@Component({
    selector: 'answer-edit',
    templateUrl: 'editAnswer.component.html'
    
})

export class EditAnswerComponent {

    @Input() QandA: any;

    @Output() reload = new EventEmitter(); 
    
    constructor(private useservice : TopicService  ){

    }

    yourAnswer: Answers={
        id: null,
        answer: '',
        idQuestion: null
    };

    editanswer(){
       this.yourAnswer.id = this.QandA.idanswer;
       this.yourAnswer.idQuestion = this.QandA.id;
        this.useservice.updateAnswer(this.yourAnswer).subscribe();
       window.location.reload();
    }
    
    

}
