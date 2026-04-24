import { useState } from "react"

const Lists = ({datas, deleteEvent, updateEvent, clickEvent})=>{
    function onDeleteBtn(){
        let id = datas.id
        deleteEvent(id)
    }
    const [onupdate,setOnupdate] = useState(true);
    
    function updateBtn(){
        setOnupdate(false)
        setEdits({
            id : datas.id,
            text: datas.text,
            isDone : datas.isDone
        })
    }

    function cancelBtn(){
        setOnupdate(true)
    }

    const [edits, setEdits] = useState({
        id : datas.id,
        text: datas.text,
        isDone : datas.isDone
    })

    function editChange(e){
        const {name, value} = e.target;
        setEdits({
            ...edits,
            [name]:value
        })
    }
    
    function onSubmitBtn(){
        updateEvent(edits.id, edits.text, edits.isDone)
        setOnupdate(true)
    }

    function onClicks(){
        clickEvent(edits.id)
    }

    return(
        <li>
            <input type="checkbox" onChange={onClicks} checked={datas.isDone || false} id={`listChk-${datas.id}`}/>
            <label htmlFor={`listChk-${datas.id}`}></label>
            {onupdate===true?
                <p className="listBox">{datas.text}</p>
                :
                <input type='text' className="editBox" name="text" value={edits.text} onChange={editChange}/>
            }
            {onupdate?
                <div className="btnBox">
                    <button onClick={updateBtn}><img src={`${process.env.PUBLIC_URL}/assets/i_edit.png`}/></button>
                    <button onClick={onDeleteBtn}><img src={`${process.env.PUBLIC_URL}/assets/i_delete.png`}/></button>  
                </div>
                :
                <div className="btnBox">
                    <button onClick={onSubmitBtn}><img src={`${process.env.PUBLIC_URL}/assets/i_check.png`}/></button>  
                    <button onClick={cancelBtn}><img src={`${process.env.PUBLIC_URL}/assets/i_cancel.png`}/></button>
                </div>
            }
        </li>
    )
}
export default Lists;