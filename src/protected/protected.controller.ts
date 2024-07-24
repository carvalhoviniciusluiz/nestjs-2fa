import { Controller, Get, UseGuards } from '@nestjs/common';
import { Jwt2faAuthGuard } from 'src/authentication/jwt-2fa/jwt-2fa-auth.guard';

@Controller('protected')
export class ProtectedController {

    @UseGuards(Jwt2faAuthGuard)
    @Get('endpoint')
    async protectedEndpoint() {
      return { message: 'endpoint protected by Jwt2faAuthGuard' };
    }
}