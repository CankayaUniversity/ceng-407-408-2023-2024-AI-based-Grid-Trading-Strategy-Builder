import Decimal from "decimal.js";
import Candle from "../model/Candle";

export default class CandleMapper {
    private constructor() { }

    public static mapFromArray(candleDataArray: string | number[]): Candle {
        return new Candle(<Candle>{
            openTime: new Decimal(candleDataArray[0]),
            openPrice: new Decimal(candleDataArray[1]),
            highPrice: new Decimal(candleDataArray[2]),
            lowPrice: new Decimal(candleDataArray[3]),
            closePrice: new Decimal(candleDataArray[4]),
            volume: new Decimal(candleDataArray[5]),
            closeTime: new Decimal(candleDataArray[6]),
            quoteAssetVolume: new Decimal(candleDataArray[7]),
            numberOfTrades: new Decimal(candleDataArray[8]),
            takerBuyBaseAssetVolume: new Decimal(candleDataArray[9]),
            takerBuyQuoteAssetVolume: new Decimal(candleDataArray[10]),
            unusedFieldIgnore: new Decimal(candleDataArray[11])
        })
    }

    public static mapToArray(candle: Candle): Array<string | null> {
        return [
            candle.openTime?.toString() || null,
            candle.openPrice?.toString() || null,
            candle.highPrice?.toString() || null,
            candle.lowPrice?.toString() || null,
            candle.closePrice?.toString() || null,
            candle.volume?.toString() || null,
            candle.closeTime?.toString() || null,
            candle.quoteAssetVolume?.toString() || null,
            candle.numberOfTrades?.toString() || null,
            candle.takerBuyBaseAssetVolume?.toString() || null,
            candle.takerBuyQuoteAssetVolume?.toString() || null,
            candle.unusedFieldIgnore?.toString() || null,
        ]
    }
}