export function addResults(results) {
    return {
        type: '@add/RESULTS',
        payload: { results },
    };
}
export function totalResult(number) {
    return {
        type: '@number/RESULTS',
        payload: { number },
    };
}
