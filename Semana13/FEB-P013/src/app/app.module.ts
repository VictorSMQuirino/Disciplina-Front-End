import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetAssistanceListComponent } from './components/pet-assistance-list/pet-assistance-list.component';
import { EditPetAssistanceComponent } from './components/edit-pet-assistance/edit-pet-assistance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetFormComponent,
    PetAssistanceListComponent,
    EditPetAssistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
