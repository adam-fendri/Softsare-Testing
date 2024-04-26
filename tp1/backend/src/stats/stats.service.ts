import { Inject, Injectable , NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStateEnum } from 'src/enums/order-state.enum';
import { OrderEntity } from 'src/order/entities/order.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Equal, Repository } from 'typeorm';
import { StatsGenerics } from './stats.generics';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository : Repository<OrderEntity>,
    @InjectRepository(UserEntity)
    private userRepository : Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private productRepository : Repository<ProductEntity>,
    @Inject(StatsGenerics)
    private statsGenerics : StatsGenerics,
    ){}

  async getDashboardStats() {
      const users = await this.userRepository.count()
      const orders = await this.orderRepository.find({where : { status : Equal(OrderStateEnum.PENDING)}})
      const products = await this.productRepository.count()
      const qb = this.orderRepository.createQueryBuilder("order");
      const { profit } = await qb.select('sum(order.price) as profit').getRawOne()
      return {
        users,
        orders :  this.statsGenerics.countItems(orders),
        products,
        profit :  this.statsGenerics.calculateProfit(profit)
      } 
  }


}
