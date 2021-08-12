import React from 'react'
import {render,  screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Profile from './profile';


describe('<Profile/>',()=>{


    test('데이터가 제대로 로드 되는가',async ()=>{
        render(<Profile id={1}/>);
        
        // 로딩중이라는 텍스트 뜨는지
        const loading = screen.getByText("로딩중");
        expect(loading).toBeInTheDocument();

        expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
    })
})

