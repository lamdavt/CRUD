import { ShowtopicComponent } from './showTopic/showtopic.component';
import { Routes } from '@angular/router';


import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { NotificationsComponent }   from './notifications/notifications.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'showtopic',
        pathMatch: 'full',
    },
    {
        path: 'user',
        component: UserComponent
    }, 
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'showtopic',
        component: ShowtopicComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    }
]
