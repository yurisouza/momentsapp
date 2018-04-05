import { MomentService } from './services/moment.service';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { UserRepository } from './repositories/user.repository';
import { PostService } from './services/post.service';

@NgModule({
  providers: [
    UserService,
    MomentService,
    PostService,
    AuthService,
    UserRepository
  ]
})

export class ProvidersModule {}
