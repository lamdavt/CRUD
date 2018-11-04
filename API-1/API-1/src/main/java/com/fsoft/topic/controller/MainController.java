package com.fsoft.topic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fsoft.topic.dao.DAO;
import com.fsoft.topic.model.Answer;
import com.fsoft.topic.model.QandA;
import com.fsoft.topic.model.Question;
import com.fsoft.topic.model.Result;
import com.fsoft.topic.model.Topic;
import com.fsoft.topic.repository.ExcuteAnswer;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 6000)


@RestController
public class MainController {
	@Autowired
	private DAO dao;
	@Autowired
	private ExcuteAnswer excuteAnswer;
	//private ProccessAnswerJava proccess;

	// question java
	@RequestMapping("/showallquestion")
	public List<Question> showallquestion(){
		return dao.showallquestion();
	}
//	@PostMapping("/createquestionjava")
//	public Question createquestion(@RequestBody Question question ){
//		dao.create(question);
//		return question;
//	}
	@GetMapping("/testajax")
	public String createquestion(@RequestParam String ajax ){
		System.out.println(ajax);
		return "ok";
	}
	
	

	@DeleteMapping("/deleteQuestionjava")
		public Result deleteQuestion(Integer id){
	
		if(dao.deleteQuestion(id) != null) 
		{
		
		  return Result.create("You Must Delete Answer first");
		}
		return Result.create("success");
		
	}
	
	
	
	
	// Topic
	
	@RequestMapping("/showtopic")
	public List<Topic> showAllTopic(){
		return dao.showalltopic();
	}
	@PutMapping(value = "/updatetopic")
	public Result updatetopic( @RequestBody Topic topicupdate ) throws Exception{
		dao.updatetopic(topicupdate);

		return Result.create("success");
	}
	
	@GetMapping("/createtopic")
	public boolean createtopic(@RequestParam String contenttopic ){
		
		return dao.createtopic(contenttopic);
	}
	

	
	
	
	
	// QandA
	@GetMapping("/getqandajava")
	public List<QandA> sendqanda(){
		return dao.sendqanda();
	}
	
	
	
	
	
	
	
	//CreateAnswerjava and DeleteAnserjava
	
	
	@PostMapping("/createAnswerjava")
	public Result createQuestion(@RequestBody Answer answer ){
		
		dao.createanswer(answer);
		
		Integer idanswer = excuteAnswer.findidanswerbyidqestion(answer.getIdQuestion()).get(0).getId();
		dao.updatequestion(idanswer, answer.getIdQuestion());
		return Result.create("success");
	}
	
	@DeleteMapping("/deleteAnswerjava")
	public Result deleteanswer(Integer id){
		if(dao.deleteAnswer(id) != null){
			return Result.create("fail");
		}
		return Result.create("success");
	}
	@PutMapping("/updateanswertopicjava")
	public Result updateanswer(@RequestBody Answer answer){
		dao.updateanswer(answer);
		return Result.create("success");
	}
	// test
	

}
