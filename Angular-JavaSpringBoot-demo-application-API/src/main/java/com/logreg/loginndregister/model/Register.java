package com.logreg.loginndregister.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
public class Register {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Email
	private String email;
	
	private String password;
	private String confirmpassword;
	private String dept;
	private String position;
	private LocalDate hiredate;
	private LocalDate birthdate;
	private String address;	
}
