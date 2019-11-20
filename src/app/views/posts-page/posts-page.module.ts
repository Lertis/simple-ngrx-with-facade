import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { PostsPageComponent } from './posts-page.component';
// Routing
import { PostsPageRoutingModule } from './posts-page.routing';
// Facade
import { Facade } from 'src/app/shared/services/facade/facade.service';



@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    PostsPageRoutingModule
  ],
  providers: [Facade]
})
export class PostsPageModule { }
