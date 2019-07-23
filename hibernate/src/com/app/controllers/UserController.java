package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.UserDao;
import com.app.pojos.*;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserDao dao;
	
	public UserController() {
		System.out.println("in cnstr of " + getClass().getName());
	}
	@GetMapping
	public List<Users> getUsers(){
		// System.out.println("in get users");
		// return 'Users';
		System.out.println(dao.getAllUsers());
		return dao.getAllUsers();
	}
	
	@GetMapping("/{u_id}")
	public Users getUsers(@PathVariable int u_id) {
	System.out.println("get Users " + u_id);
	return dao.getUsersDetails(u_id);
	}
	
	@PostMapping(value="/user", consumes = "application/json")
	public String addNewUsers(@RequestBody Users user) {
		System.out.println("in controller add users " + user);
		return dao.createNewUsers("user",user);
	}
	@PutMapping("/update")
	public String updateUsers( @RequestBody Users u) {
//		System.out.println("update users " + users_id + " " + u);
//		Users existingUsers = dao.getUsersDetails(users_id);
//		if (existingUsers != null)
		return dao.updateUsers(u);
		}
	
	@DeleteMapping("/{u_id}")
	public String deleteUsers(@PathVariable int u_id) {
		System.out.println("in delete users " + u_id);
		Users existingUsers = dao.getUsersDetails(u_id);
		if (existingUsers != null)
			return dao.deleteUsers(existingUsers);
		return "Invalid users ID : deletion failed";
	}

	
}

////update existing stock details
//	@PutMapping("/{u_id}")
//	public String updateStock(@PathVariable int u_id, @RequestBody Users u) {
//		System.out.println("update users " + users_id + " " + u);
//		Users existingUsers = dao.getUsersDetails(users_id);
//		if (existingStock != null)
//			return dao.updateStock(s);
//		return "Invalid Stock ID";
//	}