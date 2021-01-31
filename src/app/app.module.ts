import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as reducer from '../app/shared/store/reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CoreModule,
    PagesModule,

    StoreModule.forRoot({ products: reducer.productReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
