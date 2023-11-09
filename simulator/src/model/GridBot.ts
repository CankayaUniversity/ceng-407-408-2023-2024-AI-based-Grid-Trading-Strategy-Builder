import Decimal from "decimal.js"
import { HeapType } from "../enum/HeapType"
import OrderHeap from "./OrderHeap"
import OrderPair from "./OrderPair"
import Transaction from "./Transaction"
import Wallet from "./Wallet"

export default class GridBot {

    private _buyOrderHeap: OrderHeap | null = new OrderHeap(HeapType.MAX)
    private _sellOrderHeap: OrderHeap | null = new OrderHeap(HeapType.MIN)
    private _wallet: Wallet | null = null
    private _orderPairs: Array<OrderPair> | null = null
    private _transactions: Array<Transaction> | null = null
    private _lastOrderId: Decimal | null = new Decimal(0)

    constructor(instanceData?: GridBot) {
        if (instanceData === undefined) return
        this._wallet = instanceData.wallet
        this._orderPairs = instanceData.orderPairs
        this._transactions = instanceData.transactions
        this._lastOrderId = instanceData.lastOrderId
    }

    public get buyOrderHeap(): OrderHeap | null {
        return this._buyOrderHeap
    }
    public set buyOrderHeap(value: OrderHeap) {
        this._buyOrderHeap = value
    }
    public get sellOrderHeap(): OrderHeap | null {
        return this._sellOrderHeap
    }
    public set sellOrderHeap(value: OrderHeap) {
        this._sellOrderHeap = value
    }
    public get wallet(): Wallet | null {
        return this._wallet
    }
    public set wallet(value: Wallet) {
        this._wallet = value
    }
    public get orderPairs(): Array<OrderPair> | null {
        return this._orderPairs
    }
    public set orderPairs(value: Array<OrderPair>) {
        this._orderPairs = value
    }
    public get transactions(): Array<Transaction> | null {
        return this._transactions
    }
    public set transactions(value: Array<Transaction>) {
        this._transactions = value
    }
    public get lastOrderId(): Decimal | null {
        return this._lastOrderId
    }
    public set lastOrderId(value: Decimal | null) {
        this._lastOrderId = value
    }
}