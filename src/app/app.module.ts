import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NGRX
import { StoreModule, RuntimeChecks } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Reducers
import { allReducers } from './store/reducer';
// Effects
import { PostsEffects } from './store/effects/post.effects';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Facade
import { Facade } from './shared/services/facade/facade.service';


const allRuntimeCheks: RuntimeChecks = {
  strictActionImmutability: true,
  strictActionSerializability: true,
  strictStateImmutability: true,
  strictStateSerializability: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(allReducers, {
      runtimeChecks: allRuntimeCheks
    }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [Facade],
  bootstrap: [AppComponent]
})
export class AppModule { }
