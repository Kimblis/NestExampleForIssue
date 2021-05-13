import { Module } from '@nestjs/common';

import { HelloModule } from '#Modules';

@Module({
  imports: [HelloModule],
})
export class AppModule {}
