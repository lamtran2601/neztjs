import { Module } from '@nestjs/common';
import { TrpcRouter } from './trpc.router';
import { TrpcService } from './trpc.service';

@Module({
  providers: [TrpcService, TrpcRouter],
  exports: [],
})
export class TrpcModule {}
