import {useState,useRef} from 'react';

const Create = ({createEvent})=>{
    
    const [inputs, setInputs] = useState({
        userName: '',
        number:''
      });
    
      function changeTxt(e){
        const{name,value} = e.target
        setInputs({
          ...inputs,
          [name]:value
        })
      }

    function createBtn(){
        if(inputs.userName == '' || inputs.number == ''){
            alert('내용을 입력해 주세요')
        }else{
            createEvent(inputs.userName, inputs.number)
        }
    }
    const Creates = useRef()
    

    return(
        <div className="create">
            <input type="text" className="todo" onChange={changeTxt} name='userName' value={inputs.userName} placeholder='할 일을 입력해 주세요'/>
            <input type="date" className="date" onChange={changeTxt} name='number' value={inputs.number}/>
            <button onClick={createBtn}>추가</button>
        </div>
    )
}
export default Create;