import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData:any;
  dataLogin:any = {
    user:'Username: 12345@gmail.com',
    password:'Password: 12345'
  }
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private _loginService:LoginServiceService
  ) {
    this.userData = this.formBuilder.group({
      user:'',
      password:''
    })
   }
  ngOnInit(): void {
  }
  send(){
    if(this.userData.value.user == '12345@gmail.com' && this.userData.value.password == '12345'){
      this.router.navigate(['/dashboard'])
      this._loginService.setStorage('sesionLogin','true')
    }else{
      alert('incorrect password')
    }
  }
}
