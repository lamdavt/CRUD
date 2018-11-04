package com.fsoft.topic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsoft.topic.model.Role;

public interface ExcuteRole extends JpaRepository<Role, Integer>{
	
}
