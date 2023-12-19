/* map 메서드 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6]
/*ctr+left click 
-> map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
*/

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
// map(["hi", "hello"], (it) => it.toUpperCase());
map(["hi", "hello"], (it) => parseInt(it)); //오류가 뜨는데 map메서드는 이렇게도 반환 가능해야함 -> U추가

// forEach

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
