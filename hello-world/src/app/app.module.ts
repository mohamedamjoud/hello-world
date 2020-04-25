import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { GitHubFollowersService } from './services/git-hub-followers.service';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './helpers/FakeBackendInterceptor';
import { AdminComponent } from './admin/admin.component';
import { CanActivateTeam, UserToken, Permissions_ } from './services/can-activate-team.service';
import { AuthService } from './services/auth.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

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
    NavBarComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent,
    GitHubFollowersComponent,
    LoginComponent,
    AdminComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      },
      { 
        path: 'followers/:id', 
        component: GitHubProfileComponent
      },
      { 
        path: 'followers', 
        component: GitHubFollowersComponent
      },
      { 
        path: 'profile/:id', 
        component: GitHubProfileComponent
      },
      { 
        path: 'posts', 
        component: PosteComponent
      },
      { 
        path: 'login', 
        component: LoginComponent
      },
      { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [CanActivateTeam,AdminAuthGuardService],

      },
      { 
        path: 'no-access', 
        component: NoAccessComponent
      },
      { 
        path: '**', 
        component: NotFoundComponent
      },

    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GitHubFollowersService,
    {provide : ErrorHandler, useClass :appErrorHandler},
    CanActivateTeam,
    AdminAuthGuardService,
    UserToken,
    Permissions_,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
