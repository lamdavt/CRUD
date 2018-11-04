package com.fsoft.topic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.fsoft.topic.model.Question;

public interface ExcuteQuestion extends JpaRepository<Question, Integer> {
	@Transactional
	@Modifying
	@Query("update Question Q set Q.idanswer = ?1 where Q.id = ?2")
	int updatequest(Integer idanswer, Integer idquestion); 
}
