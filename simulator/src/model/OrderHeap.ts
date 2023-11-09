import Decimal from "decimal.js";
import { HeapType } from "../enum/HeapType";
import Order from "./Order";

export default class OrderHeap {
    private _heapType: HeapType = HeapType.MIN;
    private _orderArray: Array<Order> = new Array<Order>()

    constructor(heapType?: HeapType) {
        this._heapType = heapType || this._heapType
    }

    public get heapType(): HeapType {
        return this._heapType;
    }

    public get count(): number {
        return this._orderArray.length
    }

    public add(order: Order) {
        this._orderArray.push(order);
        this._heapifyUp();
    }

    public peek(): Order {
        if (this._orderArray.length == 0)
            throw new Error("Heap is empty.")

        return this._orderArray[0]
    }

    public shift(): Order {
        if (this._orderArray.length == 0)
            throw new Error("Heap is empty.")

        const order: Order = this._orderArray[0]
        this._orderArray[0] = this._orderArray[this._orderArray.length - 1]
        this._orderArray.pop()
        this._heapifyDown()
        return order
    }

    public printHeap(): void {
        var heap = `${this._heapType} Heap: ${this._orderArray[0]} `
        for (var i = 0; i < this._orderArray.length; i++) {
            heap += `\n    ${this._orderArray[i].print()} `;
        }
        console.log(heap);
    }

    private _swap(index1: number, index2: number): void {
        let holder: Order = this._orderArray[index1]
        this._orderArray[index1] = this._orderArray[index2]
        this._orderArray[index2] = holder
    }

    private _heapifyUp() {
        let index: number = this._orderArray.length - 1;
        MainLoop:
        while (this._hasParent(index)) {
            const order: Order = this._orderArray[index]
            const parentOrder: Order = this._parent(index)
            if (order.price === null || parentOrder.price === null)
                throw new Error("Order prices can not be null!")
            switch (this._heapType) {
                case HeapType.MAX:
                    if (parentOrder.price.lt(order.price)) {
                        this._swap(this._getParentIndex(index), index);
                        index = this._getParentIndex(index);
                    } else {
                        break MainLoop
                    }
                    break
                case HeapType.MIN:
                    if (parentOrder.price.gt(order.price)) {
                        this._swap(this._getParentIndex(index), index);
                        index = this._getParentIndex(index);
                    } else {
                        break MainLoop
                    }
                    break
                default:
                    throw new Error('Heap Type is wrong.')
            }
        }
    }

    private _heapifyDown() {
        let index = 0;
        MainLoop:
        while (this._hasLeftChild(index)) {
            const order: Order = this._orderArray[index];
            if (order.price === null)
                throw new Error("Order prices can not be null!")

            const letfChild: Order = this._leftChild(index);
            if (letfChild.price === null)
                throw new Error("Order prices can not be null!")

            switch (this._heapType) {
                case HeapType.MAX:
                    let greaterChildIndex: number = this._getLeftChildIndex(index);
                    if (this._hasRightChild(index)) {
                        const rightChild: Order = this._rightChild(index)
                        if (rightChild.price === null)
                            throw new Error("Order prices can not be null!")

                        if (rightChild.price.gt(letfChild.price))
                            greaterChildIndex = this._getRightChildIndex(index);
                    }
                    const greaterChild = this._orderArray[greaterChildIndex]
                    if (order.price.gt(greaterChild.price as Decimal)) {
                        break MainLoop;
                    } else {
                        this._swap(index, greaterChildIndex);
                    }
                    index = greaterChildIndex;
                    break
                case HeapType.MIN:
                    let smallerChildIndex: number = this._getLeftChildIndex(index);
                    if (this._hasRightChild(index)) {
                        const rightChild: Order = this._rightChild(index)
                        if (rightChild.price === null)
                            throw new Error("Order prices can not be null!")
                        if (rightChild.price.lt(letfChild.price))
                            smallerChildIndex = this._getRightChildIndex(index);
                    }
                    const smallerChild = this._orderArray[smallerChildIndex]
                    if (order.price.lt(smallerChild.price as Decimal)) {
                        break MainLoop;
                    } else {
                        this._swap(index, smallerChildIndex);
                    }
                    index = smallerChildIndex;
                    break
                default:
                    throw new Error('Heap Type is wrong.')
            }

        }
    }

    private _getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }
    private _getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }
    private _getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }
    private _hasLeftChild(index: number): boolean {
        return this._getLeftChildIndex(index) < this._orderArray.length;
    }
    private _hasRightChild(index: number): boolean {
        return this._getRightChildIndex(index) < this._orderArray.length;
    }
    private _hasParent(index: number): boolean {
        return index != 0 && this._getParentIndex(index) >= 0
    }
    private _leftChild(index: number): Order {
        return this._orderArray[this._getLeftChildIndex(index)];
    }
    private _rightChild(index: number): Order {
        return this._orderArray[this._getRightChildIndex(index)];
    }
    private _parent(index: number): Order {
        return this._orderArray[this._getParentIndex(index)];
    }


} 