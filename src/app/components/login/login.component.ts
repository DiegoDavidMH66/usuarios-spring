import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { loadingSwal, loadingSwalClose } from 'src/app/utils/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  cargando: boolean = false;
  usuario: Usuario;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuariosService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    const nomUsuario = this.form.value.usuario;
    const password = this.form.value.password;

    this.usuarioService.login()
      .subscribe(resp => {
        this.usuario = resp;

        if (this.usuario.nombre_usuario === nomUsuario) {
          this.cargando = true;
          this.fakeLoading();
        }
    
      });

    
  }

  fakeLoading() {
    setTimeout(() => {
      this.router.navigate(['dashboard']);
      loadingSwalClose();
    }, 2000);
  }

}
