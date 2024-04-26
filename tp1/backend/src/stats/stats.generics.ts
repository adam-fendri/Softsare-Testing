import { Injectable } from "@nestjs/common";
import { ProductEntity } from "src/product/entities/product.entity";

@Injectable()
export class StatsGenerics {
  constructor() {}

  countItems(items): number {
    return items.length;
  }

  calculateProfit(profit: number): number {
    return profit / 100;
  }

  calculateAveragePrice(products): number {
    return products.reduce((acc, product) => acc + product.price, 0) / products.length;
  }
}
