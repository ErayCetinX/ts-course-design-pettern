import {Sorter} from "./Sorter";

// Node dizideki her bir elemanın value ve next bileşenine denir
class Node {
  // nullda olabilir eğer null ise listenin sonuna geldik demektir
  // son node'daki next her zaman null'a referans verir
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // head bir node referans olacaktır
  // eğerki head null ise linkedlist boştur anlamına gelir
  head: Node | null = null

  // add() ile linkedList'e yeni bir düğü ekler
  // bu düğümü linkedListin en sonuna ekler
  add(data: number): void {
    const node = new Node(data);

    // eğerki head yoksa linkedList nulldur
    // o yüzden yeni eklenen node head'in ilk elemanı olur
    if (!this.head) {
      this.head = node;
      return;
    }

    // tail ilk önce head'deki ilk elemanı göstericek
    // her seferinde bir sonraki eleman var olana kadar
    // while loop çalışacak ve her seferinde bir sonraki elemanı
    // tail'e aktardık. Tail === null ise while loop duracak
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    // eğer tail'de next bileşeni yoksa
    // yeni oluşturulan node'u, next'e eşitle
    tail.next = node;
  }

  get length(): number {
    // eğerki head yoksa liste boştur
    // boş olan listeyinin uzunluğu 0 dır
    if (!this.head) {
      return 0;
    }

    // bütün node'leri gezip kaçtane next olduğunu bulup
    // sorasında 
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;

    }

    return length;
  }

  // at, amacı indeks lamka ve bu indeksteki düğümü döndürmektir.
  at(index: number): Node {
    // Eğer aranan değer headde yoksa hata verilir
    if (!this.head) {
      throw new Error('Indexte olmayan deger');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      // counter arttır ve node'u sonraki node aktar
      counter++;
      node = node.next;
    }
    throw new Error('Indexte olmayan deger');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('liste boş');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // Nodeleri değiştirmek yerine nodelerdeki değerleri değiştirdik
  // daha kolay ve karmaşıklıktan kurturlmak için
  swap(leftIndex: number, rgihtIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rgihtIndex)

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data
    rightNode.data = leftHand;
  }

  // listeyi bastırmak için
  print(): void {
    if (!this.head) {
      return
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
