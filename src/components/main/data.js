const Contents = {
    inputs : {
        userName: '',
        number: ''
    },
    datas : [{
        id: 1,
        userName: '프론트엔드 과정 - html, css 연습하기',
        number: '2024-05-26',
        active: false
    },{
        id: 2,
        userName: '오늘의 목표 한가지 정하기',
        number: '2024-04-07',
        active: false
    },{
        id: 3,
        userName: '리액트 프로젝트 완성하기',
        number: '2018-05-24',
        active: false
    },{
        id: 4,
        userName: '애니메이션 효과 공부하기',
        number: '2020-04-19',
        active: false
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
                    userName: action.userName,
                    number: action.number
                    }:data)
            }
        case 'click':
            return {
                ...state,
                datas: state.datas.map((data)=>data.id == action.id?
                    {...data,
                    active : action.active
                    }:data)
            }
        default : 
        return state
    }
}
export {Contents, Reducer}
// 두개 내보낼때는 default 빼고!