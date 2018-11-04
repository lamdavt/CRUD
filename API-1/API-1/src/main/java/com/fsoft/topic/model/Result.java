package com.fsoft.topic.model;

public class Result {
	private String message;

	private Result() {
		
	}
	
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	public static Result create(String message) {
		Result result = new Result();
		result.setMessage(message);
		return result;
	}
}
