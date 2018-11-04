package com.fsoft.topic.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fsoft.topic.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	List<User> findByUsername(String username);
}
