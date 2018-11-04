import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'topic-detail',
    templateUrl: 'topicdetail.component.html'
})

export class TopicdetailComponent {
    statusshow = {
        status: false
    }
    @Input() topicdetail;
    @Output() offshow = new EventEmitter<object>();
    tunroff(thetopic){
        this.offshow.emit(thetopic);
    }
    cencalshow(){

        this.offshow.emit(this.statusshow);
        window.location.reload();
    }

}
