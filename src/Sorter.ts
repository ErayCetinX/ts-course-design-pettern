export class Sorter {
  constructor(public collection: ) {}

  sort(): void {
    let swap;
    for (let i = 0; i < this.collection.length; i++) {
      // instanceof, değerin o sınıfa ait olup olmadığını belirtir true/false döner
      // instanceof, primitive tpye olmayan değerlerin tiplerini kontrol etmek için kullanılır
      // Biz burada 'this.collection' ögesinin bir Array
      // class'ına mı onu kontrol ettik
      //
      // Eğerki birden fazla sınıfı kontrol ediyorsak
      // Bu yöntem 'instanceof' kötü bir yöntemdir
      // Çünkü her değer için ayrı bir if statement olacaktır.
      // if (this.collection instanceof Array) 

      swap = false;
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          [this.collection[j], this.collection[j + 1]] = [this.collection[j + 1], this.collection[j]];
          swap = true;
        }
      }
      if (!swap) break;

      // typeof primitive('number', 'string', 'boolean')
      // değerlerini kontrol etmek için kullanıyor
      // if (typeof this.collection === "string")
    }
  }
}


