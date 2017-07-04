import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { HomeComponent } from './main/home/home.component';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { ActivationDirective } from './diretives/activation.directive';
import { LoginPopinComponent } from './main/navigation/login-popin/login-popin.component';
import { LangagesPopinComponent } from './main/navigation/langages-popin/langages-popin.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    DateFormatPipe,
    ActivationDirective,
    LoginPopinComponent,
    LangagesPopinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
