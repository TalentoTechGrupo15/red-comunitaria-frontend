import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.isLoading = true;

      console.log('Iniciando sesión...', {
        username: this.username,
        password: this.password,
      });

      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/equipo']);
      }, 1500);
    }
  }

  navigateToCreateGroup(): void {
    console.log('Navegando a crear grupo');
  }

  navigateToCreateEnterprise(): void {
    console.log('Navegando a crear emprendimiento');
  }
}
