import Transaction from "../model/Transaction";
import OrderMapper from "./OrderMapper";

export default class TransactionMapper {
    private constructor() { }

    public static mapFromJSON(jsonObject: any): Transaction {
        return new Transaction(<Transaction>{
            order: OrderMapper.mapFromJSON(jsonObject.order)
        })
    }
}