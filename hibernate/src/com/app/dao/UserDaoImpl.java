package com.app.dao;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Role;
import com.app.pojos.Users;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{
	
	@Autowired
	private SessionFactory sf;


	@Override
	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub
		
		String jpql = "select u from Users u";
		System.out.println("in dao getusers " + jpql);
		return sf.getCurrentSession().createQuery(jpql,Users.class).getResultList();
	}

	@Override
	public Users getUsersDetails(int userId) {
		// TODO Auto-generated method stub
		return sf.getCurrentSession().get(Users.class, userId);
		
	}

	@Override
	public String createNewUsers(String role, Users u) {
		sf.getCurrentSession().persist(u);
		return "Users added successfully with user_id " +u.getUserId() ;
	}

	@Override
	public String updateUsers(Users u) {
		sf.getCurrentSession().update(u);
		return "Users update successfully with ID" + u.getUserId();
	}

	@Override
	public String deleteUsers(Users u) {
		String jpql = "delete u from Users u where u.userId= :userId";
		System.out.println("in dao deleteusers " + jpql);
		sf.getCurrentSession().delete(u);
		return "Users deleted successfully with ID" + u.getUserId();
		
	}


	
	
}
	