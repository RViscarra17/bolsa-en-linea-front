import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empresa } from '../../interfaces/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  empresas: Empresa[] = [];


  constructor(
    private empresasService: EmpresaService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.empresasService.getEmpresas()
    .subscribe(empresas => this.empresas = empresas);
  }

  borrarEmpresa(empresas: Empresa) {
    Swal.fire({
      title: '¿Está seguro de eliminar?',
      text: 'No podrá recuperar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empresasService.borrarEmpresa(empresas.id!).subscribe(() => {
          this.empresasService
            .getEmpresas()
            .subscribe((empresas) => (this.empresas = empresas));
        });

        // .subscribe(id =>console.log(id))

        Swal.fire(
          'Registro eliminado',
          'SU registro se ha eliminado correctamente',
          'success'
        );
      }
    });
  }

}
