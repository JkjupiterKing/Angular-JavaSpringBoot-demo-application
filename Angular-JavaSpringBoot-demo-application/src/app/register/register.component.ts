import { Component, Inject, inject } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterModule,ToastModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService]
})
export class RegisterComponent {
  
//   userData = 
//   {
//     "firstName": "Nithya1",
//     "lastName": "ram",
//     "email": "prashanth.728.sri@gmail.com",
//     "password": "rama",
//     "dept": "development",
//     "position": "software developer",
//     "hiredate": "2024-04-01",
//     "birthdate": "2018-05-19",
//     "address":"koorgalli",
//     "confirmpassword": "rama"
// };


  
constructor(
  private authService: AuthService,
  private toaster: ToastrService,
  private router: Router  
) {}

// onRegister(form: NgForm) {
//   if (form.valid) {
//      const formData = form.value;
//     this.toaster.success("Successfully registered", "Success");
//     console.log('Registration Details:', form.value);
    
//     this.authService.registerUser(form.value).subscribe({
//       next: (response) => {
//         setTimeout(() => {
//           this.router.navigate(['/login']);
//         }, 2000); 
//       },
//       error: (error) => {
//         console.error('Registration failed:', error);
//         this.toaster.error("Registration failed", "Error");
//       },
//       complete: () => {
//         console.log('Registration process completed.');
//       }
//     });
//   }
// }
// }


onRegister(form: NgForm) {
  if (form.valid) {
    // Log form data to the console for debugging
    console.log('Form Data:', form.value);

    // Call the registerUser method from AuthService and subscribe to it
    this.authService.registerUser(form.value).subscribe({
      next: (response) => {
        // Display success message using ToastrService
        this.toaster.success('Successfully registered', 'Success');

        // Redirect to the login page after a short delay
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // 2 seconds delay
      },
      error: (error) => {
        // Log the error and show an error message
        console.error('Registration failed:', error);
        this.toaster.error('Registration failed', 'Error');
      },
      complete: () => {
        // Optional: Log completion of the registration process
        console.log('Registration process completed.');
      }
    });
  } else {
    // If the form is not valid, display a warning
    this.toaster.warning('Please fill in all required fields', 'Warning');
  }
}
}

// onRegister(form: NgForm) {
//   if (form.valid) {
//      console.log('Registration Details:', form.value);
//      this.authService.registerUser(form.value)
//      alert("registration successful");
//      this.router.navigate(['/login']);
//   }
//  }
// }
