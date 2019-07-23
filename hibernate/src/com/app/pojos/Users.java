package com.app.pojos;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Users1")
public class Users {

	//properties
	private String address;
	private String emailId;
	private String fName;
	private String gender;
	private String lName;
	private String mobileNo;
	private String password;
	private String profilePhoto;
	private Role selectedRole;
	private Integer userId;	
   	
	//default ctor
	public Users() {
		System.out.println("Inside Users default Ctor");
	}
	
	public Users(String address, String emailId, String fName, String gender, String lName, String mobileNo,
			String password, String profilePhoto, Role selectedRole, Integer userId) {
		super();
		this.address = address;
		this.emailId = emailId;
		this.fName = fName;
		this.gender = gender;
		this.lName = lName;
		this.mobileNo = mobileNo;
		this.password = password;
		this.profilePhoto = profilePhoto;
		this.selectedRole = selectedRole;
		this.userId = userId;
	}
	
	@ManyToOne
	@JoinColumn(name="role_id")
	public Role getSelectedRole() {
		return selectedRole;
	}

	public void setSelectedRole(Role selectedRole) {
		this.selectedRole = selectedRole;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="userId",length=10)
	public Integer getUserId() {
		return userId;
	}    

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Users [address=" + address + ", emailId=" + emailId + ", fName=" + fName + ", gender=" + gender
				+ ", lName=" + lName + ", mobileNo=" + mobileNo + ", password=" + password + ", profilePhoto="
				+ profilePhoto + ", selectedRole=" + selectedRole + ", userId=" + userId + "]";
	}


	
}
