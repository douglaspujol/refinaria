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
export function select(type) {
    return {
        type: '@select/TYPE',
        payload: { type },
    };
}
export function changeStep(step) {
    return {
        type: '@change/STEP',
        payload: { step },
    };
}
export function errorRequest(err) {
    return {
        type: '@err/REQUEST',
        payload: { err },
    };
}
