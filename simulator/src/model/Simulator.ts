import Decimal from "decimal.js"
import GridBot from "./GridBot"
import CandleHeap from "./CandleHeap"

class Simulator {

    private _gridBot: GridBot | null = null
    private _startTime: Decimal | null = null
    private _endTime: Decimal | null = null
    private _simulatorTime: Decimal | null = null
    private _candleData: CandleHeap | null = null

    constructor(instanceData?: Simulator) {
        if (instanceData === undefined) return
        this._gridBot = instanceData.gridBot
        this._startTime = instanceData.startTime
        this._endTime = instanceData.endTime
        this._simulatorTime = instanceData.simulatorTime || instanceData.startTime;
        this._candleData = instanceData.candleData
    }

    public get gridBot(): GridBot | null {
        return this._gridBot
    }

    public set gridBot(value: GridBot) {
        this._gridBot = value
    }

    public get startTime(): Decimal | null {
        return this._startTime
    }

    public set startTime(value: Decimal) {
        this._startTime = value
    }

    public get endTime(): Decimal | null {
        return this._endTime
    }

    public set endTime(value: Decimal) {
        this._endTime = value
    }

    public get simulatorTime(): Decimal | null {
        return this._simulatorTime
    }

    public set simulatorTime(value: Decimal) {
        this._simulatorTime = value
    }

    public get candleData(): CandleHeap | null {
        return this._candleData
    }

    public set candleData(value: CandleHeap) {
        this._candleData = value
    }
}