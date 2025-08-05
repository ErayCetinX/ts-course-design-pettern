"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
//const numbersCollection = new NumbersCollection([3, 2, 1, 56, 12, 33, 44]);
//const sorter = new Sorter(numbersCollection);
//sorter.sort()
//console.log(numbersCollection.data);
//const charactersCollection = new CharacterCollection('Xaayb');
//const stringSorter = new Sorter(charactersCollection)
//stringSorter.sort();
//console.log(charactersCollection.data)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
