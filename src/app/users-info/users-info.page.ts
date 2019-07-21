import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersApiService } from '../service/users-api.service';


@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.page.html',
  styleUrls: ['./users-info.page.scss'],
})
export class UsersInfoPage implements OnInit {
  name;
  location;
  email;
  picture;
  phone;


  constructor(private activate: ActivatedRoute, private http: HttpClient, private service: UsersApiService ) { }

  ngOnInit() {
   this.location = this.activate.snapshot.paramMap.get('location');
   this.name = this.activate.snapshot.paramMap.get('name');
   this.email = this.activate.snapshot.paramMap.get('email');
   this.picture = this.activate.snapshot.paramMap.get('picture');
    this.phone = this.activate.snapshot.paramMap.get('phone');

  }


}
