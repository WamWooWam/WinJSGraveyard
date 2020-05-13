export class ShipAssertProvider {
    shipAssert(area, func, callStack, message, parameter) {
        console.error(`Assertion failed im ${area}: ${func} ${message}\n${callStack}`);
    }
}