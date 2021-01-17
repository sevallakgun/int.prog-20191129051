import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth:AngularFireAuth, public router: Router,public db : AngularFireDatabase) { }
  async giris(email:string , sifre :string ){

    await this.firebaseAuth.signInWithEmailAndPassword(email,sifre)
    .then((res)=>{

      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      
      this.router.navigate(["/home"])
    })
  }

  async kayit(email:string , sifre :string , adsoyad : string){

    await this.firebaseAuth.createUserWithEmailAndPassword(email,sifre)
    .then((res)=>{

      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.db.list('uyeler').push({uid : res.user.uid, admin : false , adsoyad,email : email,});
      this.router.navigate(["/home"])
    })
  }
  cikis(){
    this.firebaseAuth.signOut()
    localStorage.removeItem("user")
    this.router.navigate(["/signin"])
  }
}
