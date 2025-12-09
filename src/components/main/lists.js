import { useState, useMemo } from "react"

const Lists = ({datas, deleteEvent, updateEvent,clickEvent})=>{
    function onDeleteBtn(){
        let id = datas.id
        deleteEvent(id)
        setEdits({
            id:'',
            userName:'',
            number:''
        })
    }
    const [onupdate,setOnupdate] = useState(true);
    
    function updateBtn(){
        setOnupdate(false)
        setEdits({
            id : datas.id,
            userName: datas.userName,
            number : datas.number
        })
    }

    function cancelBtn(){
        setOnupdate(true)
    }

    const [edits,setEdits] = useState({
        id : datas.id,
        userName: datas.userName,
        number : datas.number
    })

    function editChange(e){
        const {name, value} = e.target;
        setEdits({
            ...edits,
            [name]:value
        })
    }
    
    function onSubmitBtn(){
        updateEvent(edits.id, edits.userName, edits.number)
        setOnupdate(true)
    }

    function onClicks(){
        clickEvent(edits.id)
        console.log(edits.id)
    }
    




    return(
        <ul className="list">
            <input type="checkbox" onClick={onClicks} id="check"/>
            {onupdate===true?
                <li className="listbox">
                    <label>{datas.userName}</label>
                    <span>{datas.number}</span>
                </li>
                :
                <li className="updatebox">
                        <input type='text' name="userName" value={edits.userName} onChange={editChange}/>
                        <input type='date' name="number" value={edits.number} onChange={editChange}/>
                </li>    
            }
            {onupdate?
                <li className="updel">
                    <button onClick={updateBtn}><img src={`${process.env.PUBLIC_URL}/assets/edit.png`}/></button>
                    <button onClick={onDeleteBtn}><img src={`${process.env.PUBLIC_URL}/assets/delete.png`}/></button>  
                </li>
                :
                <li className="updel">
                    <button onClick={onSubmitBtn}><img src={`${process.env.PUBLIC_URL}/assets/check.png`}/></button>  
                    <button onClick={cancelBtn}><img src={`${process.env.PUBLIC_URL}/assets/cancel.png`}/></button>
                </li>
            }
        </ul>

    )
}
export default Lists;