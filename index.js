function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  n++
  return n
}

function dec(n) {
  n--
  return n
}

function makeInt(n) {
  if (n === NaN) {
    return 0
  } else {
    parseInt(n, 10)
  }
  return n
}
