package com.fsoft.topic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsoft.topic.model.Result;
import com.fsoft.topic.model.User;
import com.fsoft.topic.repository.UserRepository;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping(path = "/view")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}

	@RequestMapping(path = "/view/{id}", method = RequestMethod.GET)
	public Object getUserById(@PathVariable("id") int id) {

		userRepository.findById(id);
		User user = userRepository.findById(id).get();
		return user;

	}

	@PostMapping(path = "/create")
	public Result create(@RequestBody User user) {
		if (userRepository.findByUsername(user.getUsername()).size() > 0) {
			return Result.create("The username already exists. Please choose another username.");
		}

		if (!user.getUsername().matches("(?!.*[_]{2})[a-zA-Z0-9_]{8,20}")) {
			return Result.create(
					"Invalid username! Minimum 8 characters (contains only characters, uppercase, lowercase, numbers and _ ), not space");
		}

		if (user.getPassword().equals(user.getUsername())) {
			return Result.create("Password must be different than Username.");
		}

		if (!user.getPassword().matches("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,30}")
				|| user.getPassword().contains(" ")) {
			return Result.create(
					"Invalid password! Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character, and not space.");
		}

		if (user.getFullname().length() < 1) {
			return Result.create("Invalid Fullname! Fullname must not be empty.");
		}

		if (!user.getPhone().matches("^[0-9\\-\\+]{9,13}$") || user.getPhone().contains(" ")) {
			return Result.create(
					"Invalid Phone! Only contains number, At least 9 characters, at most 13 characters,and not space.");
		}

		if (user.getAddress().length() < 1) {
			return Result.create("Invalid Address! Address must not be empty.");
		}

		userRepository.save(user);
		return Result.create("Success");
	}

	@PostMapping(path = "/update")
	public Result update(@RequestBody User user) {
		if (user.getPassword().equals(user.getUsername())) {
			return Result.create("Password must be different than Username.");
		}

		if (!user.getPassword().matches("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,30}")
				|| user.getPassword().contains(" ")) {
			return Result.create(
					"Invalid password! Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character, and not space.");
		}

		if (user.getFullname().length() < 1) {
			return Result.create("Invalid Fullname! Fullname must not be empty.");
		}

		if (!user.getPhone().matches("^[0-9\\-\\+]{9,13}$") || user.getPhone().contains(" ")) {
			return Result.create(
					"Invalid Phone! Only contains number, At least 9 characters, at most 13 characters,and not space.");
		}

		if (user.getAddress().length() < 1) {
			return Result.create("Invalid Address! Address must not be empty.");
		}

		userRepository.save(user);
		return Result.create("Success");
	}

	@RequestMapping(path = "/delete/{id}", method = RequestMethod.GET)
	public Object delete(@PathVariable("id") int id) {

		if (userRepository.findById(id).isPresent()) {
			User user = new User();
			user.setId(id);
			userRepository.delete(user);
			return Result.create("Success");
		}
		return Result.create("ID not exists");
	}

}
