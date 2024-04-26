import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import * as dotenv from 'dotenv';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { StatsModule } from './stats/stats.module';
import { MailsubscribeModule } from './mailsubscribe/mailsubscribe.module';
dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }
    ),
    UserModule,
    CategoryModule,
    ProductModule,
    PaymentModule,
    BrandModule,
    OrderModule,
    StatsModule,
    MailsubscribeModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
