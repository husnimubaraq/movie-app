export type stringAsIndex<T = string> = { [key: string]: T }

export type ObjectIndex<
  T extends string | number | symbol = string,
  U = string
> = {
  [key in T]: U
}