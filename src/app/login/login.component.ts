import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  isOTPSent: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  sendOTP() {
    // Simulate OTP sending logic here (e.g., send OTP to the provided phone number)
    // In a real application, you would make an API request to send OTP.
    // For simplicity, we'll just enable the OTP input field.
    this.isOTPSent = true;
  }

  onSubmit() {
    // Handle OTP verification logic here (e.g., verify OTP on the server)
    // For simplicity, we'll just log the form data.
    console.log(this.loginForm.value);
  }
}
