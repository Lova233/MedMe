import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MedsServices } from '~/meds-service';
import { NotificationService } from '~/notification-service';
import * as moment from 'moment';


@Component({
    selector: 'ns-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css'],
    moduleId: module.id,
})
export class AddItemComponent implements OnInit {
    today:Date = new Date();
    notificationRange:any=[{}];
    date:any;
    time:any;
    isCreating:boolean = true;
    title:string = '';
    description:string = '';
    minDates:string ="";
    @Output() refresh: EventEmitter<object> = new EventEmitter<object>();

    constructor(
        private medsService: MedsServices,
        private notificationService: NotificationService
        )
        {}

        ngOnInit() {
             // initialize todays date and format in readable string
             this.minDates = this.formatMinDate(this.today)
        }

        onSubmit(title: string, description: string, date:any, time:any) {
            //extrapolate hours and minutes from time input
            let hour = time.getHours();
            let minutes = time.getMinutes();
            // initialize current notification time in readable string
            let humanHuour = hour + ':' + (minutes < 10 ? '0' : '') + minutes
            // create notification object and empty array where to store every related notification id
            let i
            let notificationIds = []
            // calculate iteration number based on todays date and input date
            let num = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()) ) /(1000 * 60 * 60 * 24));
<<<<<<< HEAD
            // create notification object
=======
            // notification obj
>>>>>>> 94ae482c5eb44a9a167172a74b3f76dc982f38a4
            for(i=0;i<=num;i++){
                let a = {
                    title:title,
                    description:description,
                    time:time,
                    date: moment().add(i,"d").toDate(),
                    id: Math.floor(Math.random()*5000),
                }
            // push notificationId to array
                notificationIds.push(a.id)
            // send notification to notification service
                this.notificationService.schedule(a)
            }
<<<<<<< HEAD
            // format input date in readable string
            date = this.formatDate(date)
            // create db object
=======
            date = this.formatDate(date)
            // db obj
>>>>>>> 94ae482c5eb44a9a167172a74b3f76dc982f38a4
            let x = {
                title,
                description,
                date: date,
                today: this.formatDate(new Date),
                time: humanHuour,
                created: +new Date,
                ids: notificationIds,
                repetition:num,
            }
            // add medication to database
            this.medsService.addNewMeds(x)
            // refresh layout
            this.refresh.emit(x);
            // aler the user notification sended!
            alert("New Medication added")
            // reset input field
            this.title = ""
            this.description = ""
            this.time = undefined
            this.date = undefined
        }
        formatDate(date) {
            var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [day,month,year ].join('-');
        }
        formatMinDate(date) {
            var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year,month,day ].join('/');
        }
<<<<<<< HEAD
        // cancell all notification  - Testing
        cancel(){
            this.notificationService.cancelAll()
        }
        // get all notification  -  Testing
=======
        // cancell all notification
        cancel(){
            this.notificationService.cancelAll()
        }
        // get all notification
>>>>>>> 94ae482c5eb44a9a167172a74b3f76dc982f38a4
        get(){
            this.notificationService.getAll()
        }
    }



