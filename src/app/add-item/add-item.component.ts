import { Component, OnInit } from '@angular/core';
import { MedsServices } from '~/meds-service';
import { LocalNotifications } from "nativescript-local-notifications";
import { NotificationService } from '~/notification-service';
import { DateTimePicker } from "nativescript-datetimepicker";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";


@Component({
  selector: 'ns-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  moduleId: module.id,
})
export class AddItemComponent implements OnInit {
    date:any;
    time:any;
    isCreating:boolean = true;
    title:string = '';
    description:string = '';
    private _dateText: string;
    private _timeText: string;
    private _dateTime: Date;

  constructor(
    private medsService: MedsServices,
    private notificationService: NotificationService
    )
    {}



 ngOnInit() {}


 onSubmit(title: string, description: string, date:any, time:any) {
   console.log(date.setHours(time.getHours(),time.getMinutes(),"ma cosa stasuccedendo"));
        let x = {
         title,
         description,
         today: new Date(),
         date: date.setHours(time.getHours(),time.getMinutes())
        }
        this.medsService.addNewMeds(x)
        this.notificationService.schedule(x)
}

   getDateRight(date){
     var isoformat = date;
     var readable = new Date(isoformat);
     var m = readable.getMonth();
     var d = readable.getDay();
     var y = readable.getFullYear();
     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     var mlong = months[m];
     return  mlong + " " + d + ", " + y;
   }


   onPickDateTap(args: EventData): void {
    const dateToday = new Date();
    const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
    const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);
    DateTimePicker.pickDate({
        context: (<Button>args.object)._context,
        date: dateTomorrow,
        minDate: dateTomorrow,
        maxDate: dateNextWeek,
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        title: "choose date",
        locale: "en_UK"
    }).then((selected: Date) => {
        if (selected) {
            const d = selected.getDate();
            const m = selected.getMonth() + 1;
            const y = selected.getFullYear();
            const dateText = (d < 10 ? '0' : '') + d + '.' + (m < 10 ? '0' : '') + m + '.' + y;
            this._dateText = dateText;
        }
    });
}

onPickTimeTap(args: EventData): void {
    const dateToday = new Date();
    const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
    dateTomorrow.setHours(8);
    dateTomorrow.setMinutes(0);
    DateTimePicker.pickTime({
        context: (<Button>args.object)._context,
        time: dateTomorrow,
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        title: "choose time",
        locale: "en_UK",
        is24Hours: true
    }).then((selected: Date) => {
        if (selected) {
            const h = selected.getHours();
            const m = selected.getMinutes();
            const timeText = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
            this._timeText = timeText;
        }
    });
}

get dateText() {
    return this._dateText;
}

get timeText() {
    return this._timeText;
}

get dateTime() {
    return this._dateTime;
}

set dateTime(value: Date) {
    this._dateTime = value;
}

}

