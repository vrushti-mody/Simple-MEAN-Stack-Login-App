import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  name:String='';
  email:String='';
  address:String='';
  address2:String='';
  city:String='';
  state:String='';
  zip:String='';
  
  settingsForm: FormGroup = new FormGroup({
    
    email: new FormControl(null,[Validators.email,Validators.required]),
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    address2: new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
    state: new FormControl(null,[Validators.required]),
    zip: new FormControl(null,[Validators.required])
  })
  constructor(private _router: Router,private _userService: UserService) { 
    this._userService.settings()
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
  settings(){
    if(!this.settingsForm.valid ){
      console.log('Invalid Details');
      return;
    }
    console.log('Here')
    this._userService.update(JSON.stringify(this.settingsForm.value))
    .subscribe(data=> {console.log(data); this._router.navigate(['/user'])},
    error=> {console.log(error);})
    
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
