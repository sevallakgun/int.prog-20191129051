import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  constructor(public firebaseService : FirebaseService ) { }

  ngOnInit() {

  }
  async kayitol(email:string,sifre:string,isim : string){

    await this.firebaseService.kayit(email,sifre,isim)
  
  }
}
