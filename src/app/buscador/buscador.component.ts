import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor(private fb: FormBuilder, private productoService: ProductosService, private router: Router) { }

  formProducto = this.fb.group({
    producto: ['',{validators: [Validators.required]}]
  })

  get producto() { return this.formProducto.get('producto')}

  buscar() {
    this.router.navigate(["items"], { queryParams: { search: this.producto?.value } })
    // console.log(this.producto?.value)
  }
  
  ngOnInit(): void {
  }

}
