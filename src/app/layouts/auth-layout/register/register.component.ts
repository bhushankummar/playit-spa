import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  data: any;
  constructor(private authService: AuthService, private formBuilder: FormBuilder,private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  register() {
    this.spinner.show();
    this.data = {
      email: this.registerForm.controls.email.value
    };
    this.authService.register(this.data)
      .subscribe(
        response => {
          window.open(response['url']);
          this.spinner.show();
        },
        error => {
          this.spinner.show();
          console.error(error);
        }
      );
  }

}
