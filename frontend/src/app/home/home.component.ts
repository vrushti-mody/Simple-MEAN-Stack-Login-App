import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:String='';
  email:String='';
  address:String='';
  address2:String='';
  city:String='';
  state:String='';
  zip:String='';
  
  constructor(private _router: Router,private _userService: UserService) { 
    this._userService.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addName(data){
    this.name=data.name;
    this.email=data.email;
    this.address= data.address;
    this.address2=data.address2;
    this.city=data.city;
    this.state=data.state;
    this.zip=data.zip;
  }

  ngOnInit(): void {
  }
  logout(){
    this._userService.logout()
    .subscribe(
      data=>{console.log(data);
        this._router.navigate(['/login'])
      },
      error=>console.log(error)
    )
  }
}
