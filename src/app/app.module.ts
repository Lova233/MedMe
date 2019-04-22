import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TabView } from "tns-core-modules/ui/tab-view";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
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
        ItemsComponent,
        ItemDetailComponent,
        TabViewComponent,
        AddItemComponent,
        ShowItemComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
