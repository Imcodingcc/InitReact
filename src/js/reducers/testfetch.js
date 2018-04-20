const testfetch = (state=[], action)=>{
    switch(action.type){
        case 'FETCT_POSTS':
            return action.json
        case 'RECEIVE_POSTS':
            return action.url
        
    }
}

export default testfetch