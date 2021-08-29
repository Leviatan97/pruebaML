import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  listaProductos: any = []
  p: number = 1

  constructor(private router: ActivatedRoute, private productoService: ProductosService, private router_: Router) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    let result: any
    this.router.queryParamMap.subscribe((respuesta: any) => {
      console.log(respuesta.params.search);
      this.productoService.getProductos(respuesta.params.search).subscribe(respuesta => {
        let result:any = respuesta
        let items: any = []
        let categories: any =[]
        
        result.available_filters.forEach((element: any) => {
          
          if(element.id == "category"){
            element.values.forEach((element_: any) => {
              categories.push(element_.name)            
            });
          }
          
        });
        console.log(result.results)
        result.results.forEach((element: any) => {
          
          let item: any = {
            id: element.id,
            tittle: element.title,
            price: {
              currency: element.currency_id,
              amount: element.price
            },
            picture: element.thumbnail,
            condition: element.condition,
            free_shipping: element.shipping.free_shipping,
            state_name: element.address.state_name
          }
          
          items.push(item)
          
        });
  
        
        let productos = {
          author: {
            name: "Juan Sebastian",
            lastname: "Ortegon Pineda"
          },
          categories: categories,
          items: items
        }
  
        console.log(productos);
        this.listaProductos = productos.items
      });
      
    })
  }

  getProducto(id: string) {
    this.router_.navigate(['item',{id: id}])
  }
}
