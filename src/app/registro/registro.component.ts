import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  contador:number;
  producto1:any;
  producto2:any;
  producto3:any;
  producto4:any;
  producto5:any;
  listadoProductos=[];
  listadoCompras=[]
  compra:any;
  nombre:string;
  dui:string;
  codProducto:string;
  descProducto:string;
  precio:number;
  opcionSeleccionado:string;

  constructor() { }

  ngOnInit(): void {
    this.producto1={"id":0,"codigo":"PROD001","descripcion":"Cereal","precio":2.30};
    this.producto2={"id":1,"codigo":"PROD002","descripcion":"Leche","precio":1.20};
    this.producto3={"id":2,"codigo":"PROD003","descripcion":"Huevos","precio":1.00};
    this.producto4={"id":3,"codigo":"PROD004","descripcion":"Carne Congelada","precio":2.00};
    this.producto5={"id":4,"codigo":"PROD005","descripcion":"Arroz","precio":0.50};
    this.listadoProductos.push(this.producto1);
    this.listadoProductos.push(this.producto2);
    this.listadoProductos.push(this.producto3);
    this.listadoProductos.push(this.producto4);
    this.listadoProductos.push(this.producto5);
    this.nombre="";
    this.dui="";
    this.contador=0;
    this.opcionSeleccionado="Selecciona";
  }

  ingresarVenta(){    
    this.compra={"nombre":this.nombre,"dui":this.dui,
      "codProducto":this.listadoProductos[this.opcionSeleccionado].codigo,
      "descProducto":this.listadoProductos[this.opcionSeleccionado].descripcion,
      "precioProducto":this.listadoProductos[this.opcionSeleccionado].precio,
      "descuento":0};
    this.listadoCompras.push(this.compra); 
    this.contador++; 
    this.validarDescuento(this.dui,this.contador-1);  

    this.nombre='';
    this.dui='';
    this.opcionSeleccionado='Selecciona';
  }1

  validarDescuento(duiPrueba:string,index:number){
    var visitas:number;
    visitas=0;
    for (var val of this.listadoCompras) {
      if(val.dui==duiPrueba){
        visitas++;
      }

      if(visitas>=2 && visitas < 4){
        this.listadoCompras[index].descuento=5;
      }else if(visitas>=4){
        this.listadoCompras[index].descuento=10;
      }
    }
  }
}
