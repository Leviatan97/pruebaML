import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaML';
  

  constructor(private productoService: ProductosService) {}

  buscarProducto() {

  }

  getProductoService(id: string) {

  }
}
