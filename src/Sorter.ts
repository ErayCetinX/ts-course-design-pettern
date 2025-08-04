// Sortable diye bir interface tanımladık 
// böylece constructor içindeki her elemana ortak bir 
// Sort işlemi yapabiliriz
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const {length} = this.collection
    for (let i = 0; i < length; i++) {
      // instanceof, değerin o sınıfa ait olup olmadığını belirtir true/false döner
      // instanceof, primitive tpye olmayan değerlerin tiplerini kontrol etmek için kullanılır
      // Biz burada 'this.collection' ögesinin bir Array
      // class'ına mı onu kontrol ettik
      //
      // Eğerki birden fazla sınıfı kontrol ediyorsak
      // Bu yöntem 'instanceof' kötü bir yöntemdir
      // Çünkü her değer için ayrı bir if statement olacaktır.
      // if (this.collection instanceof Array) 

      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }

      // typeof primitive('number', 'string', 'boolean')
      // değerlerini kontrol etmek için kullanıyor
      // if (typeof this.collection === "string")
    }

  }
}


