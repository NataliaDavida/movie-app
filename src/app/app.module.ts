
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetailsComponent } from './componentes/details/details.component';
import { CartComponent } from './componentes/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    CartComponent,
    MatAutocompleteModule, 
    MatFormFieldModule,
    MatIconModule,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatIconModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
