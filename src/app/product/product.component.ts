import {Component, OnInit} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:number = 2;
  name!: string;
  price!: number;
  quantity!: number;
  status!: boolean;
  tempid!: number;

  list: Product[] = [{
    id: 1,
    name: 'gun',
    price: 5000,
    quantity: 100,
    status: true
  },
    {
      id: 2,
      name: 'fruit',
      price: 100,
      quantity: 10000,
      status: true
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  create() {
    this.list.push({
      id: ++this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      status: this.status
    });
    console.log(this.list)
    this.name = '';
    this.price = 0;
    this.quantity = 0;
  }

  getedit(id: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.tempid = id;
        this.name = this.list[i].name;
        this.price = this.list[i].price;
        this.quantity = this.list[i].quantity;
        this.status = this.list[i].status;
        return
      }
    }
  }

  edit(id: number) {
    for (let i = 0; i < this.list.length; i++) {
      if(this.list[i].id === id){
        this.list[i] = {
          id: this.tempid,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          status: this.status
        };
      }
    }
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.status = false;
    return
  }

  delete(id: any) {
    this.list = this.list.filter(product => {
      return product.id !== id;
    })
  }
}
