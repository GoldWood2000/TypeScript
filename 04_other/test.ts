type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` : S

type SnakeToCamelCaseNested<T> = T extends object ? { [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]> } : T


function zip(traget: unknown[], source: unknown[]): unknown[] {
  if (traget.length === 0 || source.length === 0) return []
  const [one, ...restTraget] = traget
  const [two, ...restSource] = source
  return [[one, two], ...zip(restTraget, restSource)]
}

console.log(zip([1, 2, 3], [4, 5, 6]));

