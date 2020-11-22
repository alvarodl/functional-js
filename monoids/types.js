const Sum = (x) => ({
  x,
  extract: () => x,
  map: (f) => Sum(f(x)),
  chain: (f) => f(x),
  inspect: () => `Sum(${x})`,
  concat: (o) => Sum(x + o.x),
});

Sum.of = (x) => Sum(x);

const Product = (x) => ({
  x,
  extract: () => x,
  chain: (f) => f(x),
  inspect: () => `Product(${x})`,
  concat: (x) => Product(x * o.x),
});

Product.of = (x) => Product(x);

const Any = (x) => ({
  extract: () => x,
  chain: (f) => f(x),
  inspect: () => `Any(${x})`,
  concat: (o) => x || o.x,
});

Any.of = (x) => Any(x);

const All = (x) => ({
  extract: () => x,
  chain: (f) => f(x),
  inspect: () => `All(${x})`,
  concat: (o) => All(x && o.x),
});

All.of = (x) => All(x);

module.exports = { Sum, Product, Any, All };
