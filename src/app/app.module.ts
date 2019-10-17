import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { environment } from '../environments/environment';
import { AuthService} from './services/auth.service'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule} from './material/material.module';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NoticeComponent } from './notice/notice.component'


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    HomeComponent,
    StudentListComponent,
    AddStudentComponent,
    SignUpComponent,
    StudentDetailComponent,
    ConfirmDialogComponent,
    NoticeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AuthService,AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent,NoticeComponent]
})
export class AppModule { }
