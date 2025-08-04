import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";


const numbersCollection = new NumbersCollection([3, 2, 1, 56, 12, 33, 44]);
const sorter = new Sorter(numbersCollection);
sorter.sort()
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection('Xaayb');
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort();
console.log(charactersCollection.data)

