import './main.css'
import {useCallback, useReducer, useRef, useState, useMemo } from 'react';
import {Contents, Reducer} from './data'
import Lists from './lists';
import Create from './create';



const Main = ()=>{
    const [state, dispatch] = useReducer(Reducer,Contents);
    const {datas} = state;
    const {userName, number, active} = state.inputs;
    const userId = useRef(5);
  
  // -----------------keum pro


  // -----------------
    const createEvent = useCallback((userName, number)=>{
      dispatch({
        type : 'create',
        data : {
          id : userId.current,
          userName : userName,
          number : number
        }
      })
      userId.current += 1
    },[userName,number]);
  
    const deleteEvent = (id)=>{
      dispatch({
        type : 'delete',
        id
      })
    }
  
    const updateEvent = (id, userName, number)=>{
      dispatch({
        type : 'update',
        id,
        userName,
        number
      })
    }

    const clickEvent = (id)=>{
      dispatch({
        type : 'click',
        active
      })
    }

    function countUser(datas){
      return (
          datas.length
          )
    }
    const count = useMemo(()=>countUser(datas),[datas])

    // const count = useMemo(()=>countCheck(datas),[datas])
    // function countCheck(datas){
    //     return datas.length
    // }
  
    return(
        <main>
            <Create createEvent={createEvent} datas={datas}/>
            <div className='todoWrap'>
                <h3>Today's Goal</h3>
                <section className='todoGoal'>
                    <div className='todoGoalList'>
                        {datas.map((data)=><Lists datas={data} deleteEvent={deleteEvent} updateEvent={updateEvent} clickEvent={clickEvent}/>)}
                        <div className='BotWrap'>
                            <div className='count'>리스트 갯수 : <span>{count}개</span></div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Main;