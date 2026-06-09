import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-about',
  imports: [Card],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
    cardData: any[] = [
    {
    id:1,
    title:"Luxury Resorts",
    description: "Premium accommodations with world-class amenities and stunning views",
    image:"card1.jpg"
    },
     {
    id:1,
    title:"Nature Retreats",
    description: "Peaceful stays surrounded by greenery, hills, and fresh air",
    image:"card2.jpg"
    },
     {
    id:1,
    title:"Easy Booking",
    description: "Quick and convenient booking process for a hassle-free experience",
    image:"card3.webp"
    },
]
}
