import { RouterModule } from '@angular/router';
import { NavBarComponent } from './../core/component/nav-bar/nav-bar.component';
import { NgModule } from "@angular/core";
import { ErrorComponent } from './component/error/error.component';

@NgModule({
    declarations: [
        NavBarComponent,
        ErrorComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: ErrorComponent
              }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}