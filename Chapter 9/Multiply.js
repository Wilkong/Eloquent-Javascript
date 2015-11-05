/// <reference path="node.d.ts" />
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

function reliableMultiply(a, b) {
  var res;
  try {
    res = primitiveMultiply(a, b);
    return res;
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      //console.log("Exception"); - for testing purposes
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));