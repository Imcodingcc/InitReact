import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { fetchPost, receivePost } from '../actions'

const mapStateToProps = (state)=>({
    content: state.content
})

const mapDispatchToProps = (dispatch, ownProps)=>({
    onClick: ()=>dispatch(request("http://www.baidu.com"))
})

const request = (url)=>{
    return dispatch =>{
        dispatch(fetchPost(url))
        return fetch(url)
        .then((json)=>{
            dispatch(receivePost(json))
        })
    }
}