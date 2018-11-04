import { TopicService } from './../../services/Topic.service';
import { Component, Output, EventEmitter } from '@angular/core';

TopicService
@Component({
    selector: 'topic-create',
    templateUrl: 'topiccreate.component.html'
})

export class TopicCreateComponent {
    @Output() reload = new EventEmitter(); 
    
    constructor(private createsothing : TopicService  ){

    }
    yourquestion : any={
        
        question: '',
        idtopic: 1,
        idanswer: null 
    };
    createquestion(){
        this.createsothing.createQuestion(this.yourquestion).subscribe(()=>this.reload.emit());
    }
}
