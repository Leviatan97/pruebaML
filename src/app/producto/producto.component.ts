import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  listaProductos: any = []
  producto: any
  constructor(private router: ActivatedRoute, private productoService: ProductosService, private location: Location) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.getProducto()
    
  }

  getProducto() {
    let result: any;
    this.productoService.getProducto(this.router.snapshot.params.id).subscribe((respuesta: any)=>{
      
      
      this.productoService.getDescripcion(this.router.snapshot.params.id).subscribe((res: any)=>{
        
        let datos = {
          author: {
            name: "Juan Sebastian",
            lastname: "Ortegon Pineda"
          },
          item: {
            id: respuesta.id,
            title: respuesta.title,
            price: {
              currency: respuesta.currency_id,
              amount: respuesta.price
            },
            picture: respuesta.thumbnail,
            condition: respuesta.condition,
            free_shipping: respuesta.shipping.free_shipping,
            sold_quantity: respuesta.sold_quantity,
            description: res.plain_text
          }
        }
        console.log(datos);
        this.listaProductos.push(datos.item)
      })
    })
    
    
  }

  back(): void {
    this.location.back()
  }
}
