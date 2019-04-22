import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TabViewComponent } from "./tab-view/tab-view.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", component: TabViewComponent ,
        children: [
        { path: 'today', component: ItemsComponent, outlet: 'today' },
        {
          path: 'current-challenge', component: ItemsComponent, outlet: 'currentChallenge'
        }]
    }
]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
