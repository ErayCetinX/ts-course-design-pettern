import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharacterCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";


//const numbersCollection = new NumbersCollection([3, 2, 1, 56, 12, 33, 44]);
//const sorter = new Sorter(numbersCollection);
//sorter.sort()
//console.log(numbersCollection.data);

//const charactersCollection = new CharacterCollection('Xaayb');
//const stringSorter = new Sorter(charactersCollection)
//stringSorter.sort();
//console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);

const sorter = new Sorter(linkedList);
sorter.sort()
linkedList.print()
