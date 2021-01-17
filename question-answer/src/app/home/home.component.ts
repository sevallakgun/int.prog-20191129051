import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  cevaplar:any;



  constructor(public db : AngularFireDatabase){

    
    
  }

  

  ngOnInit() {
    this.getAnswerList();
   
  }
 
  


  getAnswerList(){

    this.db.list('cevaplar').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(cevaplar => {
    
      let kullanıcı = JSON.parse(localStorage.getItem("user"))

      this.cevaplar = cevaplar.filter((item:any)=> item.uid === kullanıcı.uid)
     
    });

  }

 



}
