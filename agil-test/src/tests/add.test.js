import {render, screen} from '@testing-library/react';
import Add from '../Describes/add'
import {addNumbers} from '../component/Numinput'
import Numinput from '../component/Numinput'

describe("addition", () =>{


test('That the numbers inputted in selector returns the sum of both', () =>{

//when
render(<Numinput/>);


const num1 = 3;
const num2 = 4;

const expectedSum = 7

const sum = addNumbers(num1,num2);


expect(sum).toBe(expectedSum);

})

})