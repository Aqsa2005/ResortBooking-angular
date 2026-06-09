import { Component } from '@angular/core';
import { Prodcard } from "../prodcard/prodcard";

@Component({
  selector: 'app-product',
  imports: [Prodcard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  cardData: any[] = [
    {
    id:1,
    title:"Card1",
    description: "places",
    image:"https://images.pexels.com/photos/30769819/pexels-photo-30769819.jpeg?cs=srgb&dl=pexels-jomon-kollannoor-337112572-30769819.jpg&fm=jpg"
    }
  ]
}
