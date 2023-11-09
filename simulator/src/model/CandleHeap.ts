import Decimal from "decimal.js";
import Candle from "./Candle";

export default class CandleHeap {
    private _candleArray: Array<Candle> = new Array<Candle>()

    constructor() { }

    public get count(): number {
        return this._candleArray.length
    }

    public add(candle: Candle) {
        this._candleArray.push(candle);
        this._heapifyUp();
    }

    public peek(): Candle {
        if (this._candleArray.length == 0)
            throw new Error("Heap is empty.")

        return this._candleArray[0]
    }

    public shift(): Candle {
        if (this._candleArray.length == 0)
            throw new Error("Heap is empty.")

        const candle: Candle = this._candleArray[0]
        this._candleArray[0] = this._candleArray[this._candleArray.length - 1]
        this._candleArray.pop()
        this._heapifyDown()
        return candle
    }

    public printHeap(): void {
        var heap = `Candle Heap: `
        for (var i = 0; i < this._candleArray.length; i++) {
            heap += `\n    ${this._candleArray[i].print()} `;
        }
        console.log(heap)
    }

    private _swap(index1: number, index2: number): void {
        let holder: Candle = this._candleArray[index1]
        this._candleArray[index1] = this._candleArray[index2]
        this._candleArray[index2] = holder
    }

    private _heapifyUp() {
        let index: number = this._candleArray.length - 1;
        while (this._hasParent(index)) {
            const candle: Candle = this._candleArray[index]
            const parentCandle: Candle = this._parent(index)
            if (parentCandle.openTime === null || candle.openTime === null)
                throw new Error('Candle open time can not be null!')
            if (parentCandle.openTime.gt(candle.openTime)) {
                this._swap(this._getParentIndex(index), index);
                index = this._getParentIndex(index);
            } else break
        }
    }

    private _heapifyDown() {
        let index = 0;
        while (this._hasLeftChild(index)) {
            const candle: Candle = this._candleArray[index];
            if (candle.openTime === null)
                throw new Error("Candle open time can not be null!")

            const letfChild: Candle = this._leftChild(index);
            if (letfChild.openTime === null)
                throw new Error("Candle open time can not be null!")

            let smallerChildIndex: number = this._getLeftChildIndex(index);
            if (this._hasRightChild(index)) {

                const rightChild: Candle = this._rightChild(index)
                if (rightChild.openTime === null)
                    throw new Error("candle prices can not be null!")

                if (rightChild.openTime.lt(letfChild.openTime))
                    smallerChildIndex = this._getRightChildIndex(index);
            }
            const smallerChild = this._candleArray[smallerChildIndex]
            if (candle.openTime.lt(smallerChild.openTime as Decimal)) {
                break
            } else {
                this._swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
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
        return this._getLeftChildIndex(index) < this._candleArray.length;
    }
    private _hasRightChild(index: number): boolean {
        return this._getRightChildIndex(index) < this._candleArray.length;
    }
    private _hasParent(index: number): boolean {
        return index != 0 && this._getParentIndex(index) >= 0
    }
    private _leftChild(index: number): Candle {
        return this._candleArray[this._getLeftChildIndex(index)];
    }
    private _rightChild(index: number): Candle {
        return this._candleArray[this._getRightChildIndex(index)];
    }
    private _parent(index: number): Candle {
        return this._candleArray[this._getParentIndex(index)];
    }
} 