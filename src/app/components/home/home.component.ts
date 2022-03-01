import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';
import { loadingSwalClose, loadingSwal, optionSwal } from "src/app/utils/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService, public notifier: NotifierService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios()
      .subscribe((resp: Usuario[]) => {
        this.usuarios = resp;
        console.log(this.usuarios);
      });
  }

  eliminarUsuario(id: number) {
    Swal.fire(optionSwal('¿ Desea eliminar el usuario ?'))
    .then((result) => {
      if (result.isConfirmed) {
        loadingSwal();
        this.usuarioService.eliminarUsuarios(id).subscribe();
        this.usuarios = this.usuarios.filter(u => u.id_usuario != id);
        loadingSwalClose();
        this.notifier.notify('success', 'Usuario eliminado correctamente');
      }
    });
  }
}