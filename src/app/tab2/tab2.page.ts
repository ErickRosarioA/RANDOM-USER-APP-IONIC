import { Component } from '@angular/core';
import { UsersApiService } from '../service/users-api.service';
import { UsersInfoPage } from '../users-info/users-info.page';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usersList: any[];
  constructor( private nav: NavController,  public http: UsersApiService) { this.loadUsers();  }

  loadUsers() {
    this.http.getUsers()
    .subscribe(
      (listFull) => {this.usersList = listFull[`results`];
     },
      (error) => {console.error(error); }
    );
  }

}
