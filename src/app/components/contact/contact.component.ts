import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

name: string;
email: string;
message: string;

  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `Mon nom est ${this.name}, mon email est ${this.email} et mon message est ${this.message}`;
    alert(allInfo);
  }

}
