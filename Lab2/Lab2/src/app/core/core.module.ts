import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ], exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class CoreModule { }
