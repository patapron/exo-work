import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'exowork',
        loadChildren: 'app/modules/exowork.module#ExoWorkModule',
        data: {
            name: 'exowork'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    getRoutes() {
        return routes;
    }
}
