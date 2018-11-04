package com.fsoft.topic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.fsoft.topic.model.Answer;

public interface ExcuteAnswer extends JpaRepository<Answer, Integer> {
	@Transactional
	@Modifying
//	@Query("Select a.id from Answer a where a.idQuestion = ?1")
//	List<Answer> findidanswerbyidqestion(Integer idQuestion);
	@Query("Select a from Answer a where a.idQuestion = ?1")
	List<Answer> findidanswerbyidqestion(Integer idQuestion);
}



