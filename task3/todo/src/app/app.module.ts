import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListToDoComponent } from './components/todo/list-to-do/list-to-do.component';
import { FormToDoComponent } from './components/todo/form-to-do/form-to-do.component';
import { ElementToDoComponent } from './components/todo/list-to-do/element-to-do/element-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ListToDoComponent,
    FormToDoComponent,
    ElementToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
