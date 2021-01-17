import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  
  constructor(public firebaseService : FirebaseService ) { }

  ngOnInit() {

  }
  async girisYap(email:string,sifre:string){

    await this.firebaseService.giris(email,sifre)
    
  }

}
