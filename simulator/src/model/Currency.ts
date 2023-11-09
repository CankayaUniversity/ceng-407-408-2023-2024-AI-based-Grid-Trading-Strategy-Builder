import Decimal from "decimal.js"

export default class Currency {

    private _name: string | null = null
    private _symbol: string | null = null
    private _lastPrice: Decimal | null = null
    private _lastPriceUpdateTime: Decimal | null = null

    constructor(instanceData?: Currency) {
        if (instanceData === undefined) return
        this._name = instanceData.name
        this._symbol = instanceData.symbol
        this._lastPrice = instanceData.lastPrice
        this._lastPriceUpdateTime = instanceData.lastPriceUpdateTime
    }

    public get name(): string | null {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get symbol(): string | null {
        return this._symbol
    }
    public set symbol(value: string) {
        this._symbol = value
    }
    public get lastPrice(): Decimal | null {
        return this._lastPrice
    }
    public set lastPrice(value: Decimal) {
        this._lastPrice = value
    }
    public get lastPriceUpdateTime(): Decimal | null {
        return this._lastPriceUpdateTime
    }
    public set lastPriceUpdateTime(value: Decimal) {
        this._lastPriceUpdateTime = value
    }
}