import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MessagesListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class MessagesModule { }
