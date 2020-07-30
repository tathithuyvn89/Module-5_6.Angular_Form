import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
function comparePassword (c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword ? null : {passwordnotmath: true};

}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validators: comparePassword})
    });
    this.registerForm.patchValue({email: 'info@example.com'});
  }
  onSubmit(){}
}
