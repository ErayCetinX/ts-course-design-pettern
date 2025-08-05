import {Sorter} from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // 'get' ile bir şeyin değerini direkt çekeriz
  get length(): number {
    return this.data.length;
  }

  // Diziden gelen iki öğenin karşılaştırılıp 
  // değişiklik olup olmayacağına karar verecektir
  // rightIndex aslında gerek yok, dizideki iki elemanın index'ini
  // alıp karşılaştırdığımız iyice anlaşılsın diye yaptık
  // rightIndex için leftIndex+1 yapmakta mantıklıdır.
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    // bubblesort swap işlemi
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

