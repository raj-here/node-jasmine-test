import { Calculator } from '../../../server/manager/calculator.manager'

let calculator: Calculator;
describe("Calculator", () => {
    beforeAll(() => {
        calculator = new Calculator()
    });
    afterAll(() => {
    });
    describe("Addition", () => {
        let _numberA: number;
        let _numberB: number;

        it("should return numberA added to numberB", () => {
            _numberA = 6;
            _numberB = 2;
            const result = calculator.add(_numberA, _numberB);
            expect(result).toEqual(8);
        });
        it("should return numberA added to numberB", () => {
            _numberA = 3;
            _numberB = 2;
            const result = calculator.add(_numberA, _numberB);
            expect(result).toEqual(5);
        });
    });
    describe("Subtraction", () => {
        let _numberA: number;
        let _numberB: number;

        it("should return numberA subtracted to numberB", () => {
            _numberA = 6;
            _numberB = 2;
            const result = calculator.subtract(_numberA, _numberB);
            expect(result).toEqual(4);
        });
        it("should return numberA subtracted to numberB", () => {
            _numberA = 3;
            _numberB = 2;
            const result = calculator.subtract(_numberA, _numberB);
            expect(result).toEqual(1);
        });
    });
    describe("Multiplication", () => {
        let _numberA: number;
        let _numberB: number;

        it("should return numberA multiplied to numberB", () => {
            _numberA = 6;
            _numberB = 2;
            const result = calculator.multiply(_numberA, _numberB);
            expect(result).toEqual(12);
        });
        it("should return numberA multiplied to numberB", () => {
            _numberA = 3;
            _numberB = 2;
            const result = calculator.multiply(_numberA, _numberB);
            expect(result).toEqual(6);
        });
    });
    describe("Division", () => {
        let _numberA: number;
        let _numberB: number;

        it("should return numberA divided to numberB", () => {
            _numberA = 6;
            _numberB = 2;
            const result = calculator.division(_numberA, _numberB);
            expect(result).toEqual(3);
        });
        it("should return numberA divided to numberB", () => {
            _numberA = 3;
            _numberB = 2;
            const result = calculator.division(_numberA, _numberB);
            expect(result).toEqual(1.5);
        });
    });
});