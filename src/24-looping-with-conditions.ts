export {};
//good
const specificString = 'Ace';
// function onlyTheAces(array:string[]) {
//     return array.filter(specificString);
// }

const onlyTheAces:string[]= ["Ace", "King", "Queen", "Jack", "Ace"]

const AceIt: string[] = onlyTheAces.filter(word => word === specificString); // paņem šos specificString 

console.log(AceIt); // trim 
// console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"]).filter((words:string[]) => words === specificString)); // Expected result: ['Ace', 'Ace']
