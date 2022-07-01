import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AnomalyDetectionModule } from './anomaly-detection/anomaly-detection.module';

@Module({
  imports: [AnomalyDetectionModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
