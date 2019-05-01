import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take,tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { LocalNotifications } from "nativescript-local-notifications";



@Injectable({ providedIn: 'root' })


export class MedsServices {
 constructor(
    private http : HttpClient

 ){

 }


  addNewMeds(x){
    this.http.put('https://mymeds-21e9a.firebaseio.com/mymeds/'+ x.created + '.json',x)
    .subscribe(res => {
        console.log(res,"resssss");
    });


  }

  getNewMeds(){
    return this.http.get<any[]>('https://mymeds-21e9a.firebaseio.com/mymeds.json')
    }
 deleteMeds(param){
    this.http.delete('https://mymeds-21e9a.firebaseio.com/mymeds/'+ param  + '.json').subscribe(res => {
        console.log(res);
    });
    }



  // createNewChallenge(title: string, description: string, frequency:number[]) {
  //   const newChallenge = new Challenge(
  //     title,
  //     description,
  //     frequency,
  //     new Date().getFullYear(),
  //     new Date().getMonth()
  //   );
  //   // Save it to server
  //   this._currentChallenge.next(newChallenge);
  // }

  // updateChallenge(title: string, description: string, frequency:number[]) {
  //   this._currentChallenge.pipe(take(1)).subscribe(challenge => {
  //     const updatedChallenge = new Challenge(
  //       title,
  //       description,
  //       frequency,
  //       challenge.year,
  //       challenge.month,
  //       challenge.days
  //     );
  //     // Send to a server
  //     this._currentChallenge.next(updatedChallenge);
  //   });
  // }

  // updateDayStatus(dayInMonth: number, status: DayStatus) {
  //   this._currentChallenge.pipe(take(1)).subscribe(challenge => {
  //     if (!challenge || challenge.days.length < dayInMonth) {
  //       return;
  //     }
  //     const dayIndex = challenge.days.findIndex(
  //       d => d.dayInMonth === dayInMonth
  //     );
  //     challenge.days[dayIndex].status = status;
  //     this._currentChallenge.next(challenge);
  //     console.log(challenge.days[dayIndex]);
  //     // Save this to a server
  //   });
  // }
}
