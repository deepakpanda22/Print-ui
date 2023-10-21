import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './headers/headers.component';
import { KeyChainComponent } from './key-chain/key-chain.component';
import { LoginComponent } from './login/login.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: KeyChainComponent,
    path: 'keyChains'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: ViewCartComponent,
    path: 'cart'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
