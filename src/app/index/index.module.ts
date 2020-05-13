import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { AddTaskPopoverComponent } from '../add-task-popover/add-task-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  entryComponents: [AddTaskPopoverComponent],
  declarations: [IndexPage, AddTaskPopoverComponent]
})
export class IndexPageModule {}
