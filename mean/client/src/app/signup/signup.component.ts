import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name = '';
lname = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

 
  onSignup() {
    alert(this.name + this.lname +this.email + this.password);
    this.userService
      .signup(this.name,this.lname,this.email, this.password)
      .subscribe(response => {
        const result = response.json();
        if (result.status == 'error') {
          alert('invalid signup');
        } else {
          sessionStorage['signup_status'] = '1';

          alert('welcome to the signup');
          this.router.navigate(['/login']);
        }
      });
  }
}
