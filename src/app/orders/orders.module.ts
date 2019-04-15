import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { OrderNewComponent } from './order-new/order-new.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [OrdersListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule
  ]
})
export class OrdersModule { }
