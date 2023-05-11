import {render, screen} from '@testing-library/react';
import addNumbers from '../calculations/addNumbers';

describe("addition", () =>{


    test('That the numbers inputted in selector returns the sum of both', () =>{

    const num1 = 3;
    const num2 = 4;

    const expectedSum = 7

    const sum = addNumbers(num1,num2);


    expect(sum).toBe(expectedSum);

})

})