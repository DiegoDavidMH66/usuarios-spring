import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus: Menu[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarMenus();
  }

  cargarMenus() {
    this.usuariosService.obtenerMenus().subscribe(resp => {
      this.menus = resp;
    });
  }

}
