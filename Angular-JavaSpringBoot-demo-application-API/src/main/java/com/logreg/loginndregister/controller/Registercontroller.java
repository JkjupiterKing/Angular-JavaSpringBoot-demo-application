package com.logreg.loginndregister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.logreg.loginndregister.model.Register;
import com.logreg.loginndregister.service.Registerservice;


@CrossOrigin
@RestController
public class Registercontroller {
	
		@Autowired
		Registerservice service;

		@PostMapping("/register-user/login")
		public Register login(@RequestBody Register user) {
			System.out.println(user );
//			return service.findUserByEmail(user);
			return service.findUserByEmailAndPassword(user);

		}
		
		@GetMapping("/get-all-users")
		public List<Register> getAllUsers() {
			return service.getusers();

		}

		@GetMapping("/get-user/{userId}")
		public Register getuserById(@PathVariable Long userId) {
			return service.getuserById(userId);
		}

		
		 @PostMapping("/register-user")
		    public ResponseEntity<Register> adduser(@RequestBody Register user) {
			 	System.out.println(user);
		        Register savedUser = service.adduser(user);
		        System.out.println("Successfully Added");
		        return ResponseEntity.ok(savedUser); // Return the saved user
		    }


		@PutMapping("/registeruser")
		public void updateuser(@RequestBody Register user) {
			service.updateuser(user);
		}

		@DeleteMapping("/registeruser/{userId}")
		public void deleteuser(@PathVariable Long userId) {
			service.deleteuser(userId);
		}
		
	}
