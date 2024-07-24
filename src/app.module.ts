import { AuthenticationModule } from './authentication/authentication.module';
import { Module } from '@nestjs/common';
import { ProtectedModule } from './protected/protected.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthenticationModule, ProtectedModule, UsersModule],
})
export class AppModule {}
