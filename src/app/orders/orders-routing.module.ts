import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderNewComponent } from './order-new/order-new.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: 'new',
    component: OrderNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
