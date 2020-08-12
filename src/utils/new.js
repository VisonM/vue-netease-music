// eslint-disable-next-line @typescript-eslint/no-unused-vars
function myNew(fn, ...args) {
  let obj, proto;
  // eslint-disable-next-line prefer-const
  proto =
    Object(fn.prototype) === fn.prototype ? fn.prototype : Object.prototype;
  Object.create(proto);
  const result = fn.call(obj, args);
  return result ? result : obj;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function InstanceOf(obj, constructor) {
  let __proto__ = obj.__proto__;
  const prototype = constructor.prototype;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (__proto__ === null) return false;
    if (prototype === __proto__) return true;
    __proto__ = obj.__proto__;
  }
}

// [8,6,7,7,6,8]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function maxSet(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (list.indexOf(arr[i]) > -1) {
      const oldVal = Number(list.join(""));
      const newVal = Number(
        list
          .filter(v => v !== arr[i])
          .concat([arr[i]])
          .join("")
      );
      if (oldVal > newVal) {
        list = list.filter(v => v !== arr[i]).concat([arr[i]]);
      }
    } else {
      list.push(arr[i]);
    }
  }
  return Number(list.join(""));
}

function Compose(...argsFn) {
  return (param) => argsFn.reduceRight((acc, fn) => fn(acc), param)
}
function fn1(x) { return x + 1 }
function fn2(x) { return x + 2 }
function fn3(x) { return x + 3 }
function fn4(x) { return x + 4 }

const superFn = Compose(fn1, fn2, fn3, fn4)
superFn(10)

// 二分查找
function binarySearch(arr, target, start, end) {
  const middle = Math.floor((end + start) / 2)
  if (start > end) return false
  if (arr[middle] === target) return true
  if (arr[middle] > target) return binarySearch(arr, target, start, middle - 1)
  if (arr[middle] < target) return binarySearch(arr, target, middle + 1, end)
}
