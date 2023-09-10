import { toUpperCase, getStringInfo } from "../src/app/Utils";

describe("Utils test suite", () => {

    //Straightforward test
    test('should return uppercase of valid string', () => {
        //arrange:
        const sut = toUpperCase;
        const expected = 'ABC';

        //act:
        const actual = toUpperCase('abc');

        //assert:
        expect(actual).toBe(expected);
    });

    //Complete assertion's test
    test('should return info for valid string', () => {
        //arrange
        const actualLowerCase = 'my-string';
        const actualCharacter = ['M','y','-','S','t','r','i','n','g'];
        const actualCharacterSubString = ['M','y'];
        const actualCharacterLength = 9;
        const actualUpperCase = 'MY-STRING';
        const actualLength = 9;
        const actualExtraInfo = {};
        
        //act
        const actual = getStringInfo('My-String');
        
        //assert
        expect(actual.lowerCase).toBe(actualLowerCase);
        expect(actual.upperCase).toBe(actualUpperCase);
        expect(actual.length).toBe(actualLength);
        expect(actual.extraInfo).toEqual(actualExtraInfo);
        expect(actual.characters).toEqual(actualCharacter);
        expect(actual.characters.length).toBe(actualCharacterLength);
        expect(actual.characters).toEqual(
            expect.arrayContaining(actualCharacterSubString)
        );
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    })

    //Usage of describe to multiple tests
    describe('getStringInfo for arg myString should', () => {

        test('return right length', () => {
            //arrange
            const arg = 'myString';
            const argSize = arg.length;
            
            //act
            const result = getStringInfo(arg);

            //assert
            expect(result.length).toBe(argSize);
        }); 

    });

    //Usage of parametrized test suites
    describe('getStringInfo for list of args should return right size', () => {
        test.each([
            //arrange
            {input: 'abc', expected: 3},
            {input: 'myString', expected: 8},
            {input: 'my-string', expected: 9}
        ])('$input size is equal to $expected', ({input, expected}) => {
            //act
            const result = toUpperCase(input);

            //assert
            expect(result.length).toBe(expected);
        });
    });
});