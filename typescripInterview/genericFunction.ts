function myGenericFunction<T>(value: T) {
    return value;
}

const result = myGenericFunction<number>(10);

console.log(result);