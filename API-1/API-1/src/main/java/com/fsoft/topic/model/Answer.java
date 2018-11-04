package com.fsoft.topic.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="answer")
public class Answer {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	@Column(name = "IDQuestion")
	private Integer idQuestion;
	@Override
	public String toString() {
		return "Answer [id=" + id + ", idQuestion=" + idQuestion + ", answer=" + answer + "]";
	}
	private String answer;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getIdQuestion() {
		return idQuestion;
	}
	public void setIdQuestion(Integer idQuestion) {
		this.idQuestion = idQuestion;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public Answer(){
		
	}
	

}
