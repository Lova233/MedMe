import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { TabViewComponent } from './tab-view/tab-view.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ShowItemComponent } from './show-item/show-item.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptDateTimePickerModule,
        NativeScriptFormsModule

    ],
    declarations: [
        AppComponent,
        TabViewComponent,
        AddItemComponent,
        ShowItemComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
