import CurrencyWallet from "./CurrencyWallet"

export default class Wallet {

    private _currencies: Array<CurrencyWallet> | null = null

    constructor(instanceData?: Wallet) {
        if (instanceData === undefined) return
        this._currencies = instanceData.currencies
    }

    public get currencies(): Array<CurrencyWallet> | null {
        return this._currencies
    }
    public set currencies(value: Array<CurrencyWallet>) {
        this._currencies = value
    }
}