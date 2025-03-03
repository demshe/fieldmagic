import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

// import { FormsModule } from '@angular/forms';

// imports: [
//     BrowserModule,
//     // AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     // RouterModule.forRoot(appRoutes)
//   ];

const appRoutes : Routes = [
  {path: '', component:CustomerComponent},
  {path: 'edit/:id', component:CustomerComponent}
];


@NgModule({
  declarations: [
    // AppComponent,
    // CustomerComponent,
    // NavbarComponent,
    // CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routes: Routes = [];
