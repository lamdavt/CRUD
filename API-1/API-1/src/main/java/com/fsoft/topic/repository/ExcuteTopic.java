package com.fsoft.topic.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import com.fsoft.topic.model.Topic;

public interface ExcuteTopic extends JpaRepository<Topic, Integer>{
	@Modifying
	@Transactional
	void deleteByiD(Integer iD);
	

}
