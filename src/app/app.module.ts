import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetailsComponent } from './componentes/details/details.component';
import { CartComponent } from './componentes/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './shared/filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    CartComponent,
    FilterPipe,
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatIconModule,
    RouterModule,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
