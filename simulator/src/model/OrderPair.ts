import { OrderSide } from "../enum/OrderSide"
import Order from "./Order.js"

export default class OrderPair {

    private _buyOrder: Order | null = null
    private _sellOrder: Order | null = null

    constructor(instanceData?: OrderPair) {
        if (instanceData === undefined) return
        this._buyOrder = instanceData.buyOrder
        this._sellOrder = instanceData.sellOrder
    }

    public get buyOrder(): Order | null {
        return this._buyOrder
    }
    public set buyOrder(value: Order) {
        this._buyOrder = value
    }
    public get sellOrder(): Order | null {
        return this._sellOrder
    }
    public set sellOrder(value: Order) {
        this._sellOrder = value
    }

}