"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // 'get' ile bir şeyin değerini direkt çekeriz
    get length() {
        return this.data.length;
    }
    // Diziden gelen iki öğenin karşılaştırılıp 
    // değişiklik olup olmayacağına karar verecektir
    // rightIndex aslında gerek yok, dizideki iki elemanın index'ini
    // alıp karşılaştırdığımız iyice anlaşılsın diye yaptık
    // rightIndex için leftIndex+1 yapmakta mantıklıdır.
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        // bubblesort swap işlemi
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
