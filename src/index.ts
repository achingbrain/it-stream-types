export interface Transform<A, B> {
  (source: Source<A>): Source<B>
}

export interface Sink<T, R> {
  (source: Source<T>): R
}

export type Source<T> = AsyncIterable<T> | Iterable<T>

export interface Duplex<TSource, TSink = TSource, RSink = void> {
  source: Source<TSource>
  sink: Sink<TSink, RSink>
}
