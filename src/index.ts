import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharacterCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([31, 22, 11, 42, -2, 0, -1])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharacterCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(200);
linkedList.add(-200);
linkedList.add(0);
linkedList.sort();
linkedList.print();

