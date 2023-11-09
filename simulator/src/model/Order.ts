import Decimal from "decimal.js"
import { OrderSide } from "../enum/OrderSide"

export default class Order {

    private _orderId: Decimal | null = null
    private _price: Decimal | null = null
    private _quantity: Decimal | null = null
    private _side: OrderSide | null = null

    constructor(instanceData?: Order) {
        if (instanceData === undefined) return
        this._orderId = instanceData.orderId
        this._price = instanceData.price
        this._quantity = instanceData.quantity
        this._side = instanceData.side
    }

    public get orderId(): Decimal | null {
        return this._orderId
    }
    public set orderId(value: Decimal) {
        this._orderId = value
    }
    public get price(): Decimal | null {
        return this._price
    }
    public set price(value: Decimal) {
        this._price = value
    }
    public get quantity(): Decimal | null {
        return this._quantity
    }
    public set quantity(value: Decimal) {
        this._quantity = value
    }
    public get side(): OrderSide | null {
        return this._side
    }
    public set side(value: OrderSide) {
        this._side = value
    }

    print(): string {
        return `Order {Order ID: ${this.orderId} Price: ${this.price}, Quantity: ${this.quantity}, Side: ${this.side}}`
    }
}