import Decimal from "decimal.js"
import Currency from "./Currency"

export default class CurrencyWallet {

    private _currency: Currency | null = null
    private _totalQuantity: Decimal | null = null
    private _lockedQuantity: Decimal | null = null

    constructor(instanceData?: CurrencyWallet) {
        if (instanceData === undefined) return
        this._currency = instanceData.currency
        this._totalQuantity = instanceData.totalQuantity
        this._lockedQuantity = instanceData.lockedQuantity
    }

    public get currency(): Currency | null {
        return this._currency
    }
    public set currency(value: Currency) {
        this._currency = value
    }
    public get totalQuantity(): Decimal | null {
        return this._totalQuantity
    }
    public set totalQuantity(value: Decimal) {
        this._totalQuantity = value
    }
    public get lockedQuantity(): Decimal | null {
        return this._lockedQuantity
    }
    public set lockedQuantity(value: Decimal) {
        this._lockedQuantity = value
    }
    public get freeQuantity(): Decimal | null {
        if (this.totalQuantity === null || this.lockedQuantity === null) return null
        return (this._totalQuantity as Decimal).minus(this._lockedQuantity as Decimal)
    }
}