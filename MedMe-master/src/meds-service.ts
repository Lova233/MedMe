import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take,tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { LocalNotifications } from "nativescript-local-notifications";



@Injectable({ providedIn: 'root' })


export class MedsServices {
 constructor(private http : HttpClient){}



// ADD
addNewMeds(x){
    this.http.put('https://mymeds-21e9a.firebaseio.com/mymeds/'+ x.created + '.json',x)
    .subscribe(res => {
        console.log(res,"resssss");
    });}
//GET
getNewMeds(){
    return this.http.get<any[]>('https://mymeds-21e9a.firebaseio.com/mymeds.json')
    }
//DELETE
deleteMeds(param){
    this.http.delete('https://mymeds-21e9a.firebaseio.com/mymeds/'+ param  + '.json').subscribe(res => {
        console.log(res);
    });
    }}
