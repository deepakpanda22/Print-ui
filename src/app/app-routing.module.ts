import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './headers/headers.component';
import { KeyChainComponent } from './key-chain/key-chain.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: KeyChainComponent,
    path: 'keyChains'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
