import { ResponseMessage } from "../enum/ResponseMessage";
import { ResponseStatus } from "../enum/ResponseStatus";

export default class Response<Type>{
    private _status: ResponseStatus = ResponseStatus.OK
    private _message: ResponseMessage = ResponseMessage.SUCCES;
    private _data: Type | null = null

    constructor(instanceData?: Response<Type>) {
        if (instanceData === undefined) return
        this._status = instanceData.status
        this._message = instanceData.message
        this._data = instanceData.data
    }

    public static setData<Type>(data: Type): Response<Type> {
        return new Response(<Response<Type>>{ data })
    }

    public static setWithoutData<Type>(status: ResponseStatus, message: ResponseMessage): Response<Type> {
        return new Response(<Response<Type>>{ status, message })
    }

    public static setAll<Type>(data: Type, status: ResponseStatus, message: ResponseMessage): Response<Type> {
        return new Response(<Response<Type>>{ data, status, message })
    }

    public get status(): ResponseStatus {
        return this._status
    }
    public set status(value: ResponseStatus) {
        this._status = value
    }
    public get data(): Type | null {
        return this._data
    }
    public set data(value: Type | null) {
        this._data = value
    }
    public get message(): ResponseMessage {
        return this._message;
    }
    public set message(value: ResponseMessage) {
        this._message = value;
    }
}