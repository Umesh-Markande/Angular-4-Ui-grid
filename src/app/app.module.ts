import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UiGridDirective } from './directive/uigrid.directive';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UiGridDirective,
    GridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule,
    RouterModule.forRoot(
      [
        { path: "grid", component: GridComponent }
      ]
    ),
  ],
  providers: [],
  exports:[UiGridDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
