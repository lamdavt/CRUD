package com.fsoft.topic.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question")
public class Question{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public Integer getIdtopic() {
		return idtopic;
	}
	public void setIdtopic(Integer idtopic) {
		this.idtopic = idtopic;
	}
	public Integer getIdanswer() {
		return idanswer;
	}
	public void setIdanswer(Integer idanswer) {
		this.idanswer = idanswer;
	}
	private String question ;
	private Integer idtopic;
	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", idtopic=" + idtopic + ", idanswer=" + idanswer
				+ "]";
	}
	private Integer idanswer;
	public Question() {}
	public Question(Integer idtopic, String question) {
		this.idtopic = idtopic;
		this.question = question;
	}
	
	
	

}
