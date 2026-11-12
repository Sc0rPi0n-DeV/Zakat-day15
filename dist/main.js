import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { BigintSerializerInterceptor } from './common/interceptors/bigint-serializer/bigint-serializer.interceptor.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new BigintSerializerInterceptor());
    await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
//# sourceMappingURL=main.js.map