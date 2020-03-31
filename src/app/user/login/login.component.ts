import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public login() {
    const queryParams = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    if (this.loginForm.valid) {
      this.loginService.login(queryParams).subscribe(
        data => {
          // handle
        },
        err => {}
      );
    }
  }
}
