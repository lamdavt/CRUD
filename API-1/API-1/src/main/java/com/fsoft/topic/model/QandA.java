package com.fsoft.topic.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vw_showallquestionandview")

public class QandA {
	@Id
	@Column(name="ID")
	public Integer id;
	
	@Column(name="Question")
	public String quesTion;
	
	@Column(name="Answer")
	public String answer;
	
	public Integer getId() {
		return id;
	}
	private Integer idanswer;
	public Integer getIdanswer() {
		return idanswer;
	}

	public void setIdanswer(Integer idanswer) {
		this.idanswer = idanswer;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getQuestion() {
		return quesTion;
	}
	
	public void setQuestion(String question) {
		this.quesTion = question;
	}
	
	public String getAnswer() {
		return answer;
	}
	
	public void setAnswer(String answer) {
		this.answer = answer;
	}
}
