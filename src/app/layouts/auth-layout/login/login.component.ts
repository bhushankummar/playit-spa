import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Form, Validators} from '@angular/forms';
import {LocalStorageService} from '../../../shared/localStorage.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any;
  data: any;
  constructor(
    private router: Router,
    private local: LocalStorageService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  generateToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  login() {
    this.data = {
      email: this.loginForm.controls.email.value
    };
    this.authService.login(this.data)
      .subscribe(
        response => {
          this.local.set(this.generateToken());
          this.router.navigateByUrl(response['/show-playlist']);
        },
        error => {
          console.error(error);
        },
      );
  }
}
