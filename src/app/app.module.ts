import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransformerComponent } from './components/transformer/transformer.component';
import { TransformerSettingsComponent } from './components/transformer-settings/transformer-settings.component';
import { ObjectComponent } from './components/object/object.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformerComponent,
    TransformerSettingsComponent,
    ObjectComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }