import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class TopicService{
    Topicurl='';
    constructor(private http: HttpClient){}
    getTopic(){
        return this.http.get('http://localhost:8080/showtopic').pipe(
            catchError(this.handalError)
          );
        
    }
   
    putTopic(body){
        return this.http.put('http://localhost:8080/updatetopic',body,httpOptions);
    }
    

    private handalError(error:HttpErrorResponse ){
        return Observable.throw(error.message);
    }

    deleteQuestion(ID){
        return this.http.delete('http://localhost:8080/deleteQuestionjava',{
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('id',ID)
        })
    }
    
    // java
    getQuestionAndAnswer(){
        return this.http.get('http://localhost:8080/getqandajava').pipe(
            catchError(this.handalError)
          );
        
    }
    createQuestion(question){
        return this.http.post('http://localhost:8080/createquestionjava',question,httpOptions)
    }
    createAnswer(answer){
        return this.http.post('http://localhost:8080/createAnswerjava',answer,httpOptions)
    }
    updateAnswer(id){
        return this.http.put('http://localhost:8080/updateanswertopicjava',id,httpOptions)
    }
    deleteAnswer(id){
        return this.http.delete('http://localhost:8080/deleteAnswerjava',{
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            params: new HttpParams().set('id',id)
        })
    }
}