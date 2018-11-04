package com.fsoft.topic.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fsoft.topic.model.Answer;
import com.fsoft.topic.model.QandA;
import com.fsoft.topic.model.Question;
import com.fsoft.topic.model.Role;
import com.fsoft.topic.model.Topic;
import com.fsoft.topic.repository.ExcuteAnswer;
import com.fsoft.topic.repository.ExcuteQuestion;
import com.fsoft.topic.repository.ExcuteRole;
import com.fsoft.topic.repository.ExcuteShowQAndA;
import com.fsoft.topic.repository.ExcuteTopic;;

@Repository
public class DAO {
	@Autowired
	private ExcuteRole role;
	@Autowired
	private ExcuteQuestion questionRe;
	@Autowired
	private ExcuteTopic topicRe;
	@Autowired
	private ExcuteShowQAndA showQAndA; 
	@Autowired
	private ExcuteAnswer excuteAnswer;
	////
	boolean isnull = true;
	String content = "";
	
	 public List<Role> showallrole(){
		 return role.findAll();
	 }
	 
	 
	 
	// question
	 
	public List<Question> showallquestion(){
		return questionRe.findAll();
	}
	public boolean createquestion(Integer IDTopic, String content){
		Question newquestion = new Question(IDTopic,content );	
		if(questionRe.save(newquestion).getQuestion() != null){
			isnull = false;
		} 
		return isnull;
	}
	public Question create(Question question){
		return questionRe.save(question);
	}
	
	public Exception deleteQuestion(Integer Id){
		
		try {
			questionRe.deleteById(Id);
		} catch (Exception e) {
			return e;
		}

		return null;
	}
	
	public int updatequestion(Integer isanswer, Integer isquestion){
		return questionRe.updatequest(isanswer, isquestion);
	}

	
	// topic
	public List<Topic> showalltopic(){
		return topicRe.findAll();
	}
	public boolean createtopic(String content){
		Topic newtopic = new Topic(content);	
		if(topicRe.save(newtopic).getNameTopic() != null){
			isnull = false;
		} 
		return isnull;
	}
	public boolean updatetopic(Topic newtopic){
		topicRe.save(newtopic);
		return true;
	}
	public void delete(Integer id){
		topicRe.deleteById(id);
	}
	// QandA
	public List<QandA> sendqanda(){
		return showQAndA.findAll();
	}
	// Answer
	public Exception createanswer(Answer answer){
		try {
			excuteAnswer.save(answer);
		} catch (Exception e) {
			return e;
		}
		return null;
	}
	public Exception deleteAnswer(Integer idanswer){
		try {
			excuteAnswer.deleteById(idanswer);
		} catch (Exception e) {
			return e;
		}
		return null;
	}
	public void updateanswer(Answer answer){
		excuteAnswer.save(answer);
	}
}
