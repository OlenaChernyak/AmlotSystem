import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name: string;
    password: string;
    

  constructor(private loginService: LoginService,
    private router : Router) {}
   

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.loginService.signIn(this.name, this.password)
          .subscribe(token => {
              localStorage.setItem('token', token);
              this.router.navigate(['/home'])
          },
              error => alert("Incorrect name or password"));
    
}

}
