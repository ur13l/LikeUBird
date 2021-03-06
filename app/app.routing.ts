import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AppComponent } from "~/app.component";
import { StartComponent } from "~/components/start/start.component";
import { SignUpComponent } from "~/components/sign-up/sign-up.component";
import { SignInComponent } from "~/components/sign-in/sign-in.component";
import { HomeComponent } from "~/components/home/home.component";
import { ServiceDetailComponent } from "~/components/service-detail/service-detail.component";
import { OrderDetailComponent } from "~/components/order-detail/order-detail.component";
import { AuthGuard } from "~/guards/auth.guard";
import { RedirectAuthGuard } from "~/guards/redirect-auth.guard";
import { DrawerComponent } from "~/components/drawer/drawer.component";
import { Drawer2Component } from "~/components/drawer2/drawer2.component";
import { WorkerDetailComponent } from "~/components/worker-detail/worker-detail.component";
import { ConfirmOrderComponent } from "~/components/confirm-order/confirm-order.component";
import { MyOrdersComponent } from "~/components/my-orders/my-orders.component";
import { Drawer3Component } from "~/components/drawer3/drawer3.component";
import { OrderComponent } from "~/components/order/order.component";
import { HelpComponent } from "~/components/help/help.component";
import { OrderTrackingComponent } from "~/components/order-tracking/order-tracking.component";
import { SettingsComponent } from "~/components/settings/settings.component";
import { MarketPlaceComponent } from "~/components/market-place/market-place.component";
import { PaymentMethodsComponent } from "~/components/payment-methods/payment-methods.component";
import { AddPaymentMethodComponent } from "~/components/add-payment-method/add-payment-method.component";
import { RatingComponent } from "~/components/rating/rating.component";
import { CleaningSelectionComponent } from "~/components/cleaning-selection/cleaning-selection.component";
import { CleaningInfoComponent } from "~/components/cleaning-info/cleaning-info.component";
import { CleaningAdditionalComponent } from "~/components/cleaning-additional/cleaning-additional.component";
import { CleaningHouseSizeComponent } from "~/components/cleaning-house-size/cleaning-house-size.component";
import { ThanksComponent } from "~/components/thanks/thanks.component";
import { PlumberSelectionComponent } from "~/components/plumber-selection/plumber-selection.component";
import { FareComponent } from "~/components/fare/fare.component";
import { FareLocksmithComponent } from "~/components/fare-locksmith/fare-locksmith.component";
import { PlumbingCalendarComponent } from "~/components/plumbing-calendar/plumbing-calendar.component";
import { LocksmithSelectionComponent } from "~/components/locksmith-selection/locksmith-selection.component";
import { SetPaymentComponent } from "~/components/set-payment/set-payment.component";

export const routes: Routes = [
    { path: "", component:AppComponent, children: [
        {path:"", pathMatch:'full', component:StartComponent, canActivate:[RedirectAuthGuard]},
        {path:"sign-up", pathMatch:'full', component:SignUpComponent, canActivate:[RedirectAuthGuard]},
        {path:"sign-in", pathMatch:'full', component:SignInComponent, canActivate:[RedirectAuthGuard]},
        {path:"order-detail", pathMatch:'full', component:OrderDetailComponent, canActivate:[AuthGuard]},
        {path:"confirm-order", pathMatch:'full', component:ConfirmOrderComponent, canActivate:[AuthGuard]},
        {path:"rating", pathMatch:'full', component:RatingComponent, canActivate:[AuthGuard]},
        {path:"order-tracking", pathMatch:'full', component:OrderTrackingComponent, canActivate:[AuthGuard]},
        {path:"market-place/:n", pathMatch:'full', component:MarketPlaceComponent, canActivate:[AuthGuard]},
        {path:"cleaning-selection", pathMatch:'full', component:CleaningSelectionComponent, canActivate:[AuthGuard]},
        {path:"cleaning-info", pathMatch:'full', component:CleaningInfoComponent, canActivate:[AuthGuard]},
        {path:"cleaning-additional", pathMatch:'full', component:CleaningAdditionalComponent, canActivate:[AuthGuard]},
        {path:"cleaning-house-size", pathMatch:'full', component:CleaningHouseSizeComponent, canActivate:[AuthGuard]},
        {path:"thanks", pathMatch:'full', component:ThanksComponent, canActivate:[AuthGuard]},
        {path:"plumber-selection", pathMatch:'full', component:PlumberSelectionComponent, canActivate:[AuthGuard]},
        {path:"fare", pathMatch:'full', component:FareComponent, canActivate:[AuthGuard]},
        {path:"plumbing-calendar", pathMatch:'full', component:PlumbingCalendarComponent, canActivate:[AuthGuard]},
        {path:"locksmith-selection", pathMatch:'full', component:LocksmithSelectionComponent, canActivate:[AuthGuard]},
        {path:"fare-locksmith", pathMatch:'full', component:FareLocksmithComponent, canActivate:[AuthGuard]},
        {path:"set-payment", pathMatch:'full', component:SetPaymentComponent, canActivate:[AuthGuard]},
        
        {
            path:"", component:DrawerComponent, children:[
                {path:"home", pathMatch:'full', component:HomeComponent, canActivate:[AuthGuard]},
                {path:"order", pathMatch:'full', component:OrderComponent, canActivate:[AuthGuard]},        
            ]
        },
        {
            path:"", component:Drawer2Component, children:[
                {path:"service-detail", component:ServiceDetailComponent, canActivate:[AuthGuard]},
                {path:"worker-detail", component:WorkerDetailComponent, canActivate:[AuthGuard]}
            ]
        },
        {
            path:"", component:Drawer3Component, children:[
                {path:"my-orders", pathMatch:'full', component:MyOrdersComponent, canActivate:[AuthGuard]},
                {path:"help", pathMatch:'full', component:HelpComponent, canActivate:[AuthGuard]},
                {path:"settings", pathMatch:'full', component:SettingsComponent, canActivate:[AuthGuard]},
                {path:"payment-methods", pathMatch:'full', component:PaymentMethodsComponent, canActivate:[AuthGuard]},        
                {path:"add-payment-method", pathMatch:'full', component:AddPaymentMethodComponent, canActivate:[AuthGuard]},        
                
            ]
        },
        
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }