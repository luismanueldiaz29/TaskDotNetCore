import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const routes: Routes = [
  {
    path:'tasklist',
    component:TaskListComponent
  },
  {
    path:'taskadd',
    component:TaskAddComponent
  },
  {
    path:'taskedit/:id',
    component:TaskEditComponent
  },
  { 
    path: '',
    component: HomeComponent, pathMatch: 'full' 
  },
  { 
    path: 'counter',
    component: CounterComponent 
  },
  { 
    path: 'fetch-data',
    component: FetchDataComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
