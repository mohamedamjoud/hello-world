import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
 
  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl(
        '',
        [Validators.required,UsernameValidators.cannotContainSpaces],
        UsernameValidators.shouldBeUnique),
        password : new FormControl()
    })
   
  });
  constructor() { }

  ngOnInit() {
  }
  get username(){
    return this.form.get('account.username');
  }
  login()
  {
     this.form.setErrors({
       invalidLogin : true
     });
  }

}
