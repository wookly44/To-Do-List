import './App.css';
import './components/main.css'
import {useCallback, useReducer, useState, useRef, useMemo } from 'react';
import {Contents, Reducer} from './components/data'
import Lists from './components/lists';
import Create from './components/create';

function App() {

  const [state, dispatch] = useReducer(Reducer,Contents);
  const {datas} = state;
  const userId = useRef(6);

  // Read
  const clickEvent = useCallback((id)=>{
    dispatch({
      type : 'click',
      id
    })
  }, []);

  // Create
  const createEvent = useCallback((text)=>{
    dispatch({
      type : 'create',
      data : {
        id : userId.current,
        text : text
      }
    })
    userId.current += 1
  }, []);

  // Update
  const updateEvent = useCallback((id, text)=>{
    dispatch({
      type : 'update',
      id,
      text
    })
  }, []);

  // Delete
  const deleteEvent = useCallback((id)=>{
    dispatch({
      type : 'delete',
      id
    })
  }, []);

  const count = datas.length;

  const [filterState, setFilterState] = useState('incomplete');

  function listChk(){
      if(filterState === 'incomplete'){
          setFilterState('completed')
      }else{
          setFilterState('incomplete')
      }
  }

  const viewMode = useMemo(() => {
      if (filterState === 'completed') {
          return datas.filter(data => data.isDone);
      } else{
          return datas.filter(data => !data.isDone);
      }
  }, [datas, filterState]);
  
  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <main>
            <Create createEvent={createEvent}/>
            <ul className='listWrap'>
                {[...viewMode].sort((a, b) => b.id - a.id).map((data)=>
                    <Lists key={data.id} datas={data} deleteEvent={deleteEvent} updateEvent={updateEvent} clickEvent={clickEvent}/>
                )}
            </ul>
            <button className="viewBtn" onClick={listChk}>
                {filterState === 'incomplete' ? "완료된 리스트 보기" : "미완료 리스트 보기"}
            </button>
        </main>
    </div>
  );
}

export default App;
