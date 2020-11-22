const Identity = (x) => ({
  extract: () => x,
  map: (f) => Identity(f(x)),
  chain: (f) => f(x),
  inspect: () => `Identity(${x})`,
  concat: (o) => Identity(x.concat(o.extract())),
});

Identity.of = (x) => Identity(x);

const List = (x) => ({
  extract: () => x,
  map: (f) => List(f(x)),
  chain: (f) => f(x),
  inspect: () => `List(${x})`,
  concat: (o) => List([...x, ...o.extract()]),
  head: () => x[0],
  tail: () => x[x.length - 1],
});

List.of = (x) => List(x);

const Just = (x) => ({
  extract: () => x,
  map: (f) => Just(f(x)),
  chain: (f) => f(x),
  inspect: () => `Just(${x})`,
  fork: (_, f) => f(x),
  isJust: true,
  isNothing: false,
});

const Nothing = (x) => ({
  extract: () => Nothing(),
  map: (f) => Nothing(),
  chain: (f) => Nothing(),
  inspect: () => "Nothing()",
  fork: (f, _) => f(x),
  isJust: false,
  isNothing: true,
});

const MaybeOf = (x) =>
  x === null || x === undefined || x.isNothing ? Nothing() : Just(x);

const Maybe = {
  of: MaybeOf,
};

module.exports = { Identity, List, Maybe };
