import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      birthday: ['', [Validators.required, Validators.minLength(4)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      district: ['', [Validators.required, Validators.minLength(4)]],
      correctAddress: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      retypePassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public register() {
    const queryParams = {
      username: this.registerForm.get('username').value,
      fullName: this.registerForm.get('fullName').value,
      birthday: this.registerForm.get('birthday').value,
      phoneNumber: this.registerForm.get('phoneNumber').value,
      email: this.registerForm.get('email').value,
      city: this.registerForm.get('city').value,
      district: this.registerForm.get('username').value,
      correctAddress: this.registerForm.get('correctAddress').value,
      password: this.registerForm.get('password').value
    };

    if (this.registerForm.valid) {
      this.registerService.register(queryParams).subscribe(
        data => {},
        err => {
          console.log(err);
        }
      );
    }
  }
}
