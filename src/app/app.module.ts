import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import {MatCardModule} from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { FilterpipePipe } from './searchPipe/filterpipe.pipe';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    GetallbooksComponent,
    QuickViewComponent,
    MywishlistComponent,
    MycartComponent,
    MyorderComponent,
    FilterpipePipe,
    OrderplacedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxPaginationModule,
    MatRadioModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
