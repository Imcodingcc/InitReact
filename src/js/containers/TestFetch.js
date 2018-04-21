import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { fetchPost, receivePost } from '../actions'
import TestFetch from '../components/TestFetch'

const request = (url)=>{
    return dispatch =>{
        dispatch(fetchPost(url))
        const promise = fetch(url)
        return promise
        .then((response)=>{
            response.json().then((data)=>{
                dispatch(receivePost(data.code)) 
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch(receivePost('err'))
        })
    }
}

const mapStateToProps = (state)=>({
    content: state.testfetch
})

const mapDispatchToProps = (dispatch, ownProps)=>({
    fetchBaidu: ()=>dispatch(request("http://localhost:8083/identity/testFetch"))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestFetch)