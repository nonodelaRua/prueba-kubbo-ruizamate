import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'product-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
