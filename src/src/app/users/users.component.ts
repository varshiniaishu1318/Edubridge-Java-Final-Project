import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list: any[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.api.listcustomers().subscribe({
      next: resp => this.list = resp
    });
  }

  editCustomer(users: any): void {
    // Implement the logic to handle editing the customer
    console.log('Edit customer:', UsersComponent);
    // You can open a modal, navigate to another page, etc., for editing
  }
}
