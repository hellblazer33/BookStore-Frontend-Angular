import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './components/authGuard/authguard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WishlistserviceService } from './Services/wishlistService/wishlist.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard],
  children:[
    {path:'getallbooks',component:GetallbooksComponent},
    {path:'quickview/:bookId',component:QuickViewComponent},
    {path:'mywishlist/:userId',component:MywishlistComponent},
    {path:'mycart/:userId',component:MycartComponent},
    {path:'myorder',component:MyorderComponent},
    {path:'orderplaced',component:OrderplacedComponent}
  ]
}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
