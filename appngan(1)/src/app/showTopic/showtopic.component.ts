import { TopicService } from './../../services/Topic.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'showtopic.component.html'
})
export class ShowtopicComponent implements OnInit{
    showlisttopic:any = [];
    showlistquestion:any = [];
    mesageError;
    isshow = false;
    isshowanswer = false;
    topicedit = {};
    idItem;
    error;
    itemofQandA;
    
    constructor(private listtopic: TopicService){

    }
    ngOnInit(){
       this.listtopic.getTopic().subscribe(res => {this.showlisttopic = res}, errer => this.mesageError = errer);
       this.getdata();
    }
    getdata(){
        this.listtopic.getQuestionAndAnswer().subscribe((res) => this.showlistquestion = res, errer => this.mesageError = errer);
    }
    EditTopic(topic){
        this.isshow = true; 
        this.topicedit = topic;
    }
    DeleteTopic(idTopic){
        this.listtopic.deleteQuestion(idTopic.id).subscribe(data => {
            this.error = data;                
            if(this.error.message == "success") {
                this.getdata();
            }          
        });
    setTimeout(()=>this.error = null,3000)

    }
    turnoff(thetopicdetail){
        if(thetopicdetail.status == null) {
            this.isshow = false;
            this.listtopic.putTopic(thetopicdetail).subscribe()
        }
        else{
            this.isshow = false;
        }
        
        
    }
    // turn off and turn on answer
    Showanswer(id,isshowanswerbyid){
        this.idItem = id;
        isshowanswerbyid == false? this.isshowanswer = true:this.isshowanswer = false
    }

    //answerjava
    deteleanserjava(id){
        this.listtopic.deleteAnswer(id).subscribe(data => {
            this.error = data;
            this.error.message == 'success'?this.getdata():this.getdata
            setTimeout(()=>this.error = null,3000)
        });
    }
    editanswer(item){
        this.itemofQandA = item;
    }
    passidQuestion(idQuestion){
        this.idItem = idQuestion;
    }

    
}
