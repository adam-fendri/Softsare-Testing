import { Entity , PrimaryGeneratedColumn , Column, OneToMany} from 'typeorm'
import { Timestamp } from '../Generics/timestamp.entity'
import { UserRoleEnum } from 'src/enums/user-role.enum'
import { OrderEntity } from 'src/order/entities/order.entity'

@Entity('user')
export class UserEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstname:String
    
    @Column()
    lastname:String
    
    @Column({
        unique : true
    })
    email:String
    
    @Column()
    adress:String
    
    @Column()
    postcode:String
    
    @Column()
    password:String
    
    @Column()
    salt:String
    
    @Column({
        type : 'enum',
        enum : UserRoleEnum,
        default : UserRoleEnum.USER
    })
    role:String
    
    @OneToMany(
        type => OrderEntity,
        (order) => order.user,
        {
            nullable : true
        })
    orders : OrderEntity[] 
}