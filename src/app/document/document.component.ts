import { Component, OnInit } from '@angular/core';
import { Document } from "../document.interface";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit 
  Document: Document;
1



  constructor() { }

  ngOnInit() {
  }

}
