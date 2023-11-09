import Decimal from "decimal.js"

export default class Candle {
    private _openTime: Decimal | null = null
    private _openPrice: Decimal | null = null
    private _highPrice: Decimal | null = null
    private _lowPrice: Decimal | null = null
    private _closePrice: Decimal | null = null
    private _volume: Decimal | null = null
    private _closeTime: Decimal | null = null
    private _quoteAssetVolume: Decimal | null = null
    private _numberOfTrades: Decimal | null = null
    private _takerBuyBaseAssetVolume: Decimal | null = null
    private _takerBuyQuoteAssetVolume: Decimal | null = null
    private _unusedFieldIgnore: Decimal | null = null

    constructor(instanceData?: Candle) {
        if (instanceData === undefined) return
        this._openTime = instanceData.openTime
        this._openPrice = instanceData.openPrice
        this._highPrice = instanceData.highPrice
        this._lowPrice = instanceData.lowPrice
        this._closePrice = instanceData.closePrice
        this._volume = instanceData.volume
        this._closeTime = instanceData.closeTime
        this._quoteAssetVolume = instanceData.quoteAssetVolume
        this._numberOfTrades = instanceData.numberOfTrades
        this._takerBuyBaseAssetVolume = instanceData.takerBuyBaseAssetVolume
        this._takerBuyQuoteAssetVolume = instanceData.takerBuyQuoteAssetVolume
        this._unusedFieldIgnore = instanceData.unusedFieldIgnore
    }

    public get openTime(): Decimal | null {
        return this._openTime
    }
    public set openTime(value: Decimal) {
        this._openTime = value
    }
    public get openPrice(): Decimal | null {
        return this._openPrice
    }
    public set openPrice(value: Decimal) {
        this._openPrice = value
    }
    public get highPrice(): Decimal | null {
        return this._highPrice
    }
    public set highPrice(value: Decimal) {
        this._highPrice = value
    }
    public get lowPrice(): Decimal | null {
        return this._lowPrice
    }
    public set lowPrice(value: Decimal) {
        this._lowPrice = value
    }
    public get closePrice(): Decimal | null {
        return this._closePrice
    }
    public set closePrice(value: Decimal) {
        this._closePrice = value
    }
    public get volume(): Decimal | null {
        return this._volume
    }
    public set volume(value: Decimal) {
        this._volume = value
    }
    public get closeTime(): Decimal | null {
        return this._closeTime
    }
    public set closeTime(value: Decimal) {
        this._closeTime = value
    }
    public get quoteAssetVolume(): Decimal | null {
        return this._quoteAssetVolume
    }
    public set quoteAssetVolume(value: Decimal) {
        this._quoteAssetVolume = value
    }
    public get numberOfTrades(): Decimal | null {
        return this._numberOfTrades
    }
    public set numberOfTrades(value: Decimal) {
        this._numberOfTrades = value
    }
    public get takerBuyBaseAssetVolume(): Decimal | null {
        return this._takerBuyBaseAssetVolume
    }
    public set takerBuyBaseAssetVolume(value: Decimal) {
        this._takerBuyBaseAssetVolume = value
    }
    public get takerBuyQuoteAssetVolume(): Decimal | null {
        return this._takerBuyQuoteAssetVolume
    }
    public set takerBuyQuoteAssetVolume(value: Decimal) {
        this._takerBuyQuoteAssetVolume = value
    }
    public get unusedFieldIgnore(): Decimal | null {
        return this._unusedFieldIgnore
    }
    public set unusedFieldIgnore(value: Decimal) {
        this._unusedFieldIgnore = value
    }

    print(): string {
        return `Candle : { Open Time: ${this.openTime}, Open Price: ${this.openPrice}, High Price: ${this.highPrice}, Low Price: ${this.lowPrice}, Close Price: ${this.closePrice}, Volume: ${this.volume}, Close Time: ${this.closeTime}, Quote Asset Volume: ${this.quoteAssetVolume}, Number Of Trades: ${this.numberOfTrades}, Taker Buy Base Asset Volume: ${this.takerBuyBaseAssetVolume}, Taker Buy Quote Asset Volume: ${this.takerBuyQuoteAssetVolume}, Unused Field Ignore: ${this.unusedFieldIgnore}} `
    }
}