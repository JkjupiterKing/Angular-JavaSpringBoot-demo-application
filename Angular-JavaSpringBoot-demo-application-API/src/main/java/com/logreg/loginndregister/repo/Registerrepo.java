package com.logreg.loginndregister.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.logreg.loginndregister.model.Register;

@Repository
public interface Registerrepo extends JpaRepository<Register, Long>{
	//findAll
	//save
	//findById
//	select * from regiter where emailid = "";
	
	Register findByEmail(String email);
	Register findByEmailAndPassword(String email,String password);
}
