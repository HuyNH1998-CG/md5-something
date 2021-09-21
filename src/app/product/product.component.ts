import {Component, OnInit} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!: number;
  name!: string;
  price!: number;
  quantity!: number;

  list: Product[] = [{
    id: 1,
    name: 'gun',
    price: 5000,
    quantity: 100,
  },
    {
      id: 2,
      name: 'fruit',
      price: 100,
      quantity: 10000,
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  create(id: number, name: string, price: number, quantity: number) {
    this.list.push({id, name, price, quantity})
  }

  edit(id: number, name: string, price: number, quantity: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list[i] = {id,name,price,quantity}
      }
    }
  }

  delete(id: any){
    this.list = this.list.filter(product => {
      return product.id !== id;
    })
  }
}
