import {render, screen} from '@testing-library/react';
import divideNumbers from '../calculations/divideNumbers';

describe("division", () =>{

    test('That the numbers inputted in selector returns the kvot of both', () =>{

    const num1 = 100;
    const num2 = 10;

    const expectedKvot = 10

    const kvot = divideNumbers(num1,num2);

    expect(kvot).toBe(expectedKvot);

    }); test("That the numbers inputted result in a rounded whole number", () => {

    const num1 = 5;
    const num2 = 2;
    const expectedKvot = 3;

    const kvot = divideNumbers(num1, num2);

    expect(kvot).toBe(expectedKvot);

    })

})