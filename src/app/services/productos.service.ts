import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: any = []

  constructor(private http: HttpClient) { }

  /**
   * getProductos
   */
  public getProductos(id: string) {
    return this.http.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${id}`);
  }

  /**
   * getProducto
   */
  public getProducto(id: any) {
    return this.http.get(`https://api.mercadolibre.com/items/${id}`);
  }

  /**
   * getDescripcion
   */
  public getDescripcion(id: any) {
    return this.http.get("https://api.mercadolibre.com/items/"+id+"/description");
  }

}
