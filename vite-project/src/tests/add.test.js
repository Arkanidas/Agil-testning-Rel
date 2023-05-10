import {render, screen} from '@testing-library/react';
import Add from '../Describes/add';

describe("addition", () =>{


test('That the numbers inputted in selector returns the sum of both', () =>{

//when
render(<Add/>);


let a = 3;
let b = 4;

const sum = Add(a,b);

expect(sum).toBe(7);

})

})