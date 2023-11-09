import Decimal from "decimal.js"
import Order from "./Order"
import { TransactionStatus } from "../enum/TransactionStatus"

export default class Transaction {
    private _order: Order | null = null
    private _executionTime: Decimal | null = null
    private _status: TransactionStatus | null = null
    constructor(instanceData?: Transaction) {
        if (instanceData === undefined) return
        this._order = instanceData.order
        this._executionTime = instanceData.executionTime
        this._status = instanceData._status
    }

    public get order(): Order | null {
        return this._order
    }
    public set order(value: Order) {
        this._order = value
    }
    public get executionTime(): Decimal | null {
        return this._executionTime
    }
    public set executionTime(value: Decimal) {
        this._executionTime = value
    }
    public get status(): TransactionStatus | null {
        return this._status
    }
    public set status(value: TransactionStatus | null) {
        this._status = value
    }

}