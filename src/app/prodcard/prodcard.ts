import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prodcard',
  imports: [],
  templateUrl: './prodcard.html',
  styleUrl: './prodcard.css',
})
export class Prodcard {
  @Input() pdata: any;
}
