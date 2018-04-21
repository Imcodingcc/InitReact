const testfetch = (state = "www.baidu.com", action)=>{
    switch(action.type){
        case 'FETCT_POSTS':
            return action.url
        case 'RECEIVE_POSTS':
            return action.json
        default:
            return state
        
    }
}

export default testfetch