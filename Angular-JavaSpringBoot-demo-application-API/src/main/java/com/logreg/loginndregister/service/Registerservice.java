package com.logreg.loginndregister.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logreg.loginndregister.model.Register;
import com.logreg.loginndregister.repo.Registerrepo;


import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor

public class Registerservice {
	 @Autowired 
	    private Registerrepo registerRepository;

	    
	    public List<Register> getusers() {
	        return registerRepository.findAll();
	    }
		
	    public Register getuserById(Long userId) {
	    	Optional<Register> register =  registerRepository.findById(userId);
	    	return register.orElse(null);               
	    }
	    
	    public Register adduser(Register user) {
	        // Save the user to the database and return the saved user
	        return registerRepository.save(user);
	    }
	    
	    public void updateuser(Register user) {
	        if (registerRepository.existsById(user.getUserId())) {
	            registerRepository.save(user);
	        } else {
	            System.out.println("User not found");       	
	        }
	    }
	    
	   
	    public void deleteuser(Long userId) {
	    	registerRepository.deleteById(userId);
	    }
	   

	    public String findUserByEmail(Register user) {
	    	//Method1
	    	Register dbUser =  registerRepository.findByEmail(user.getEmail());
	    	if(user.getPassword().equals(dbUser.getPassword())) {
	    		return "Success";
	    	} else {
	    		return "Login Failure";
	    	}
//	    	System.out.println("Received User from DB: " + dbUser);
	    	//Check pw logic pending
	    }

	    public Register findUserByEmailAndPassword(Register user) {
	    	//Method2
	    	System.out.println("Called by - findUserByEmailAndPassword");
	    	Register dbUser =  registerRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
	    	System.out.println("Received User from DB: " + dbUser);
	    	return dbUser;
	    }

	}


