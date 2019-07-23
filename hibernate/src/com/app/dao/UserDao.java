package com.app.dao;

import java.util.List;
import com.app.pojos.Role;
import com.app.pojos.Users;


public interface UserDao {
	
	List<Users> getAllUsers();
	Users getUsersDetails(int userId);
	String createNewUsers(String role, Users u);
	String updateUsers(Users u);
	String deleteUsers(Users u);
	
}
