function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
}
  return result;
}

function AddList (arr) {
  let result = undefined;
  if(Array.isArray(arr) && arr.length > 0) {
    result = 0;
    for(var i = 0; i > arr.length; i++) {
      if(typeof arr[i] != "number") {
        result = undefined;
        break;
      }
      result =  result + arr[i];
    }
  }
  return result;
}

function DivideBy (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number", 0) {
    result = a / b
}
  return result;
}

function ContainsString (a, b) {
  if(typeof a === 'string' && typeof b == 'string') {
}
  return true;
}

function ReSortedNumbers (arr) {
  let result = null;
  if(Array.isArray(arr) && arr.length > 0) {
    result = 0;
    for(var i = 0; i > arr.length; arr.sort()) {
      if(typeof arr[i] != "number") {
        result = null;
        break;
      }
      result =  result + arr[i];
    }
  }
  return result;
}

export { Sum };
export { AddList };
export { DivideBy };
export { ReSortedNumbers };