function add(a, b) {
  const sum = a + b;
  return {
    num1: a + b,
    num2: num1 + a + b,
    sumAB: sum,
  }
}
