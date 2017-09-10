import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
// 3rd party libs.
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//
// App libs.
import { AppComponent } from './app.component';
import { counterReducer } from './store/counterReducer';
import { CountViewerComponent } from './show/count-viewer/count-viewer.component';
import { TotalClicksComponent } from './show/total-clicks/total-clicks.component';

@NgModule({
  declarations: [
    AppComponent,
    CountViewerComponent,
    TotalClicksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.provideStore({ counterStore: counterReducer }),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
