const Contents = {
    inputs : {
        text: '',
        isDone: false
    },
    datas : [{
        id: 1,
        text: 'html, css 연습하기',
        isDone: false
    },{
        id: 2,
        text: '오늘의 목표 정리하기',
        isDone: false
    },{
        id: 3,
        text: '리액트 프로젝트 완성하기',
        isDone: false
    },{
        id: 4,
        text: '애니메이션 효과 공부하기',
        isDone: false
    },{
        id: 5,
        text: 'Next.js 프로젝트 시작하기',
        isDone: false
    }]
}
const Reducer = (state, action)=>{
    switch(action.type){
        case 'create':
            return {
                // ...state,
                // inputs:{
                //     ...state.inputs,
                //     [action.name]:action.value
                // }
                inputs : Contents.inputs,
                datas : state.datas.concat(action.data)
            }
        case 'delete':
            return {
                    ...state,
                    datas : state.datas.filter((data)=>data.id !== action.id)
                }
        case 'update':
            return {
                ...state,
                datas: state.datas.map((data)=>data.id == action.id?
                    {...data,
                    text: action.text
                    }:data)
            }
        case 'click':
            return {
                ...state,
                datas: state.datas.map((data)=>data.id == action.id?
                    {...data,
                    isDone : !data.isDone
                    }:data)
            }
        default : 
        return state
    }
}
export {Contents, Reducer}