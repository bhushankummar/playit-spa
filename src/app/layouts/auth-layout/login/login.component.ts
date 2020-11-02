import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Form, Validators} from '@angular/forms';
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
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  login() {
    this.data = {
      email: this.loginForm.controls.email.value
    };
    this.authService.login(this.data)
      .subscribe(
        response => {
          // this.router.navigateByUrl(response['url']);
        },
        error => {
          console.log(error);
        },
      );
  }
}
