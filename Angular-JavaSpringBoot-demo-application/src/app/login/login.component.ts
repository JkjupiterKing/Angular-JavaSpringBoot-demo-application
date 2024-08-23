import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

import {  Router, RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterModule,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router,
      
  ) {}
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  onSubmit(form: NgForm) {
    console.log('inside on submit', form.value);
    const email = form.value.email;
    this.toaster.success("Successfully logged in", "Success");
    this.authService.login(form.value).subscribe({
      next: (response) => {
        if (response) {
          setTimeout(() => {
            this.router.navigate(['/dashboard1'], { queryParams: { email: email } });
          }, 2000); 
        } else {
          this.toaster.warning("Not logged in successfully", "Warning");
        }
      },
      error: (err) => {
        this.toaster.error("There was an error", "Error");
      }
    });
  }
}