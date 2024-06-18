import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uname: string = '';
  pwr: string = '';

constructor(
  private router:Router
) {}

login() {
    console.log("username: ", this.uname);
    console.log("password: ", this.pwr);

  if(this.uname == 'anandh' && this.pwr == 'kumar') {
      // next page
      alert('Success');
      this.router.navigate(['/dashboard']);
  } else {
      alert('please enter correct username and password');
  }
}
}