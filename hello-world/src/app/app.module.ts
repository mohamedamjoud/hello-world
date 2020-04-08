import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PosteComponent } from './poste/poste.component';
import { PostService } from './services/post.service';
import { appErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormsComponent,
    PosteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CoursesService,
    PostService,
    {provide : ErrorHandler, useClass :appErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
