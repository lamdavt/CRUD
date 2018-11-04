import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './showerror/error.component';
import { TopicCreateComponent } from './topiccreate/topiccreate.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { TopicService } from './../services/Topic.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { ShowtopicComponent }   from './showTopic/showtopic.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateAnswerComponent } from './answer/createAnswer/createAnswer.component';
import { EditAnswerComponent } from './answer/editAnswer/editAnswer.component';


@NgModule({
  declarations: [
    EditAnswerComponent,
    CreateAnswerComponent,
    ErrorComponent,
    TopicCreateComponent,
    AppComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    ShowtopicComponent,
    NotificationsComponent,
    TopicdetailComponent,
    CreateComponent,
    DetailComponent,
    DeleteComponent,
    UpdateComponent

    //AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TopicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
