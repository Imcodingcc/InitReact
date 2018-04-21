let nextTodoId = 0
export const addTodo = text =>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter =>({
    type: "SET_VISIBILITY_FILTER",
    filter
})

export const toggleTodo = id =>({
    type: 'TOGGLE_TODO',
    id
})

export const fetchPost = (url)=>({
    type: 'FETCH_POSTS',
    url
})

export const receivePost = (json)=>({
    type: 'RECEIVE_POSTS',
    json
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}