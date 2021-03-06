import { Injectable } from '@angular/core';
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
    // format notification date
    let at = new Date(x.date.setHours(x.time.getHours(),x.time.getMinutes()))
    // Create notification
    LocalNotifications.schedule(
        [{
          id: x.id,
          thumbnail: true,
          title:  "Did you take " + x.title + " today?",
          body:  x.description,
          forceShowWhenInForeground: true,
          at: at,
          image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
          actions: [
            {
              id: "input-richard",
              type: "button",
              launch: true,
              editable: true,
            }
          ]

        }]
        )
        .then(() => {}).catch(error => console.log("doScheduleId5WithInput error: " + error));
  }

    // Cancel all notification related to picked medication
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
        // cancell all notification  - Testing
        cancelAll(){
            LocalNotifications.cancelAll();
        }
        // get all notification  -  Testing
        getAll(){
            LocalNotifications.getScheduledIds().then(
                function(ids:number[]) {
                })
        }
}

