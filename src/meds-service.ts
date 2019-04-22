import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take,tap } from 'rxjs/operators';
import { Meds } from './meds-model';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { LocalNotifications } from "nativescript-local-notifications";



@Injectable({ providedIn: 'root' })


export class MedsServices {
 constructor(
    private http : HttpClient

 ){
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
        console.log("Notification received: " + JSON.stringify(notificationData));
      });
 }


  addNewMeds(x){
    this.schedule(x)
    this.http.put('https://mymeds-21e9a.firebaseio.com/mymeds/'+ x.title + '.json',x)
    .subscribe(res => {
        console.log(res);
    });


  }

  getNewMeds(){
    // return this.http.get<any>('https://mymeds-21e9a.firebaseio.com/mymeds.json')
return   [{
    title:'Augumentin',
    description:'Take empty stomach',
    today: '22/04/2019',
    date: '29/04/2019',
    time:'16:00'
   },{
    title:'Maloox',
    description:'Do not take with alcool',
    today: '23/04/2019',
    date: '28/04/2019',
    time:'12:00'
   },
   {
    title:'Eye Drops',
    description:'2 drop each eye',
    today: '28/04/2019',
    date: '3/05/2019',
    time:'18:00'
   }
]
}



  schedule(x): void {
    LocalNotifications.schedule(
        [{
          id: 5,
          thumbnail: true,
          title: x.title,
          body: x.description,
          forceShowWhenInForeground: true,
          at: new Date(new Date().getTime() + 10 * 1000),
          actions: [
            {
              id: "input-richard",
              type: "input",
              title: "Tap here to reply",
              placeholder: "Type to reply..",
              submitLabel: "Reply",
              launch: true,
              editable: true,
              // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
            }
          ]
        }])
        .then(() => {
          alert({
            title: "Notification scheduled",
            message: "ID: 5",
            okButtonText: "OK, thanks"
          });
        })
        .catch(error => console.log("doScheduleId5WithInput error: " + error));
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
