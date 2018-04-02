import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { UserRepository } from './repositories/user.repository';

@NgModule({
  providers: [
    UserService,
    AuthService,
    UserRepository
  ]
})

export class ProvidersModule {}
