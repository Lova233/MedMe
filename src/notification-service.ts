import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take,tap } from 'rxjs/operators';
import { Meds } from './meds-model';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { LocalNotifications } from "nativescript-local-notifications";



@Injectable({ providedIn: 'root' })


export class NotificationService {
    id:any;
    constructor(){
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
        console.log("Notification received: " + JSON.stringify(notificationData));
      });
 }


  schedule(x): void {
    LocalNotifications.getScheduledIds().then(
        function(ids:number[]) {
          console.log(ids,"before");
        }
    )
    LocalNotifications.schedule(
        [{
          id: x.created,
          thumbnail: true,
          title:  x.title,
          body:  x.description,
          forceShowWhenInForeground: true,
          at: new Date(x.date),
          image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
          actions: [
            {
              id: "input-richard",
              type: "button",
              title: "Tap here to reply",
              placeholder: "Type to reply..",
              submitLabel: "Reply",
              launch: true,
              editable: true,
              // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
            }
          ]

        }]
        )
        .then(() => {
          alert({
            title: "Notification scheduled",
            message: "ID: 55",
            okButtonText: "OK, thanks"
          });
        })




        .catch(error => console.log("doScheduleId5WithInput error: " + error));

        // LocalNotifications.getScheduledIds().then(
        //     function(ids:number[]) {
        //       console.log(ids.length-1,"after");
        //     })
  }
        cancel(x){
            LocalNotifications.cancel(x).then(
                function(foundAndCanceled) {
                    if (foundAndCanceled) {
                    console.log("OK, it's gone!");
                    } else {
                    console.log("No ID 5 was scheduled");
                    }
                }
            )
        }

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
