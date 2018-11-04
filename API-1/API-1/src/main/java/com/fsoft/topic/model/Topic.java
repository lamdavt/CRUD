package com.fsoft.topic.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="topic")
public class Topic {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer iD;
	
	@Column(name="Name_Topic")
	private String nameTopic;

	public Integer getiD() {
		return iD;
	}
	public Topic(){
		
	};
	public Topic(String nameTopic) {
		this.nameTopic = nameTopic;
	}

	public void setiD(Integer iD) {
		this.iD = iD;
	}

	public String getNameTopic() {
		return nameTopic;
	}

	public void setNameTopic(String nameTopic) {
		this.nameTopic = nameTopic;
	}
	
	 
	
}
