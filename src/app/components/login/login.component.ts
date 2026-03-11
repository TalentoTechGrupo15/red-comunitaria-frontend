import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

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
  

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.isLoading = true;
      const credentials = {
        usuario: this.username,
        clave: this.password
      };
      this.usuarioService.login(credentials).subscribe({
        next: (response)=>{
            this.router.navigate(['/']);
            this.isLoading = false;
        },
        error: (error)=>{
            console.error('Login failed:', error);
          this.isLoading = false;
        }
      });
        this.isLoading = false;
    }
  }

  navigateToCreateGroup(): void {
    console.log('Navegando a crear grupo');
  }

  navigateToCreateEnterprise(): void {
    console.log('Navegando a crear emprendimiento');
  }
}
