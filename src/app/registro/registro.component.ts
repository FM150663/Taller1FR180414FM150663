import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  producto1:any;
  producto2:any;
  producto3:any;
  listadoProductos=[];


  constructor() { }

  ngOnInit(): void {
    this.producto1={"id":0,"codigo":"PROD001","descripcion":"Producto bien shingon #1","precio":1000};
    this.producto2={"id":1,"codigo":"PROD002","descripcion":"Producto bien shingon #2","precio":1000};
    this.producto3={"id":2,"codigo":"PROD003","descripcion":"Producto bien shingon #3","precio":1000};
    this.listadoProductos.push(this.producto1);
    this.listadoProductos.push(this.producto2);
    this.listadoProductos.push(this.producto3);
  }

}
