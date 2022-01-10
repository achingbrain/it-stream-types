export type Source<T> = AsyncIterable<T> | Iterable<T>;

export interface Sink<T, R = Promise<void>> {
    (source: Source<T>): R;
}

export interface Duplex<TSource, TSink = TSource, RSink = Promise<void>> {
    source: Source<TSource>;
    sink: Sink<TSink, RSink>;
}
