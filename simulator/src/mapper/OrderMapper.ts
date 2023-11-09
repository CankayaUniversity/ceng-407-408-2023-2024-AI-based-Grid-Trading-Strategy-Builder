import Decimal from "decimal.js";
import Order from "../model/Order";
import { OrderSide } from "../enum/OrderSide";

export default class OrderMapper {

    private constructor() { }

    public static mapFromJSON(jsonObject: any): Order {
        let side: OrderSide;

        switch (jsonObject.side) {
            case "BUY":
                side = OrderSide.BUY
                break;
            case "SELL":
                side = OrderSide.SELL
                break;
            default:
                throw new Error("Unexcepted Order Side")
        }

        return new Order(<Order>{
            orderId: new Decimal(jsonObject.orderId),
            price: new Decimal(jsonObject.price),
            quantity: new Decimal(jsonObject.quantity),
            side
        })
    }

    public static mapToJSON(order: Order): any {
        const { orderId, price, quantity, side } = order
        return { orderId, price, quantity, side }
    }
}