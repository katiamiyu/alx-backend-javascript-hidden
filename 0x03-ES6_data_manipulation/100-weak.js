const weakmap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakmap.has(endpoint)) {
    weakmap.set(endpoint, 0);
  }
  weakmap.set(endpoint, weakmap.get(endpoint) + 1);
  if (weakmap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
export { weakmap, queryAPI };
