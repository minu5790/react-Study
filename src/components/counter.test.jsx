import React from 'react';
import {fireEvent, getByText, render} from "@testing-library/react";
import Counter  from './counter';


it('Counter 컴포넌트 랜더' ,()=>{
    const {getByText} =render(<Counter/>);
    const titleElement = getByText(/counter/i);
    expect(titleElement).toBeInTheDocument();
})

it('count 초기화 체크',()=>{
    const {getByText} =render(<Counter/>);
    
    // '0'으로 초기화 되어있는지
    
    const countElement = getByText('0');
    expect(countElement).toBeInTheDocument();

    // '+'버튼 검사

    const plusElement = getByText('+');
    expect(plusElement).toBeInTheDocument();

    // '-' 버튼 검사

    const minusElement = getByText('-');
    expect(minusElement).toBeInTheDocument();
})

it('plus 버튼 작동 잘 되는지', ()=>{
    const { getByText } = render(<Counter />);

    const plusElement = getByText('+');
    fireEvent.click(plusElement);

    // '0'이 '1'로 바뀌었는지
    const countElement = getByText('1');
    expect(countElement).toBeInTheDocument();
})

it('minus 버튼 작동 잘 되는지', ()=>{
    const { getByText } = render(<Counter />);
    
    const minusElement = getByText('-');
    fireEvent.click(minusElement);

    // '0'이 '1'로 바뀌었는지
    const countElement = getByText('-1');
    expect(countElement).toBeInTheDocument();
})