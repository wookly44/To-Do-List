import { useState, useRef } from 'react';

const Create = ({ createEvent }) => {
    
    const [inputs, setInputs] = useState({
        text: '',
    });
    
    function changeTxt(e){
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    function createBtn(){
        if(inputs.text == ''){
            alert('내용을 입력해 주세요')
        }else{
            createEvent(inputs.text)
            setInputs({text: ''})
        }
    }
    const Creates = useRef()
    

    return(
        <div className="createWrap">
            <i><img src={`${process.env.PUBLIC_URL}/assets/totoro1.png`} alt="아이콘" /></i>
            <input type="text" onChange={changeTxt} name='text' value={inputs.text} placeholder='할 일을 입력해 주세요'/>
            <button onClick={createBtn}><img src={`${process.env.PUBLIC_URL}/assets/button.png`} alt="추가" /></button>
        </div>
    )
}
export default Create;