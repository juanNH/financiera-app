type Nulleable<T> = T | null;

interface DataState<T> {
    data: T,
    isLoading: boolean,
    isError: boolean,
}

export type { Nulleable, DataState }