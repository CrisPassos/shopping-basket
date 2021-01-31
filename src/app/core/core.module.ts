import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule { }
