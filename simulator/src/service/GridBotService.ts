import Decimal from "decimal.js"
import GridBot from "../model/GridBot"
import Order from "../model/Order"
import Transaction from "../model/Transaction"
import Response from "../model/Response"
import { ResponseStatus } from "../enum/ResponseStatus"
import { OrderSide } from "../enum/OrderSide"
import { ResponseMessage } from "../enum/ResponseMessage"

export default class GridBotService {

    private _gridBot: GridBot

    constructor(gridBot: GridBot) {
        this._gridBot = gridBot;
    }

    public get gridBot(): GridBot {
        return this._gridBot
    }
    public set gridBot(value: GridBot) {
        this._gridBot = value
    }

    public addNewOrder(order: Order): Response<Order> {
        if (order.side === OrderSide.BUY) {
            this.gridBot.buyOrderHeap?.add(order)
            return Response.setData(order)
        } else if (order.side === OrderSide.SELL) {
            this.gridBot.sellOrderHeap?.add(order)
            return Response.setData(order)
        }
        return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.UNEXPECTED_ORDER_SIDE)
    }

    public addNewTransaction(transaction: Transaction): void {
        this.gridBot.transactions?.push(transaction)
    }

    public hasRemainingSellOrder(): Response<boolean> {
        if (this.gridBot.sellOrderHeap === null)
            return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
        return Response.setData(this.gridBot.sellOrderHeap.count != 0)
    }

    public hasRemainingBuyOrder(): Response<boolean> {
        if (this.gridBot.buyOrderHeap === null)
            return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
        return Response.setData(this.gridBot.buyOrderHeap.count != 0)
    }

    public getNextSellOrder(): Response<Order> {
        if (this.gridBot.sellOrderHeap === null)
            return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
        return Response.setData(this.gridBot.sellOrderHeap.peek())
    }

    public getNextBuyOrder(): Response<Order> {
        if (this.gridBot.buyOrderHeap === null)
            return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
        return Response.setData(this.gridBot.buyOrderHeap.peek())
    }

    // TODO: Unfinished 
    public takeActionForTransaction(transaction: Transaction): void {
        const { order: transactionOrder, executionTime } = transaction

        if (transactionOrder === null)
            throw new Error("Transaction order can not be null!")

        const counterOrderDataResponse = this.getCounterOrderData(transactionOrder)

        if (counterOrderDataResponse.status != ResponseStatus.OK) {
            return
        }

        const counterOrder: Order = counterOrderDataResponse.data as Order

        this.addNewOrder(new Order(counterOrder))

    }

    public getCounterOrderData(order: Order): Response<Order> {

        if (this.gridBot.orderPairs === null) return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)

        const { price, quantity, side } = order as Order
        for (const orderPair of this.gridBot.orderPairs) {
            if (side === OrderSide.BUY) {
                const { price: buyPrice, quantity: buyQuantity } = orderPair.buyOrder as Order
                if ((price as Decimal).eq(buyPrice as Decimal) && (quantity as Decimal).eq(buyQuantity as Decimal)) {
                    if (orderPair.sellOrder === null)
                        return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
                    return Response.setData(orderPair.sellOrder)
                }
            } else if (side === OrderSide.SELL) {
                const { price: sellPrice, quantity: sellQuantity } = orderPair.sellOrder as Order
                if ((price as Decimal).eq(sellPrice as Decimal) && (quantity as Decimal).eq(sellQuantity as Decimal)) {
                    if (orderPair.buyOrder === null)
                        return Response.setWithoutData(ResponseStatus.ERROR, ResponseMessage.NULL)
                    return Response.setData(orderPair.buyOrder)
                }
            } else {
                return Response.setWithoutData(ResponseStatus.WARNING, ResponseMessage.UNEXPECTED_ORDER_SIDE)
            }
        }

        return Response.setWithoutData(ResponseStatus.WARNING, ResponseMessage.NO_COUNTER_ORDER)
    }


}