export default function isPromise(object) {
    return Promise.resolve(object) === object;
}
