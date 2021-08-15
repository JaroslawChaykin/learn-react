let state = {
    messagesPage: {
        dialogsData: [
            {id: '1', name: 'Jaroslaw'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Pavel'},
            {id: '4', name: 'Anna'},
        ],
        messageData: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'I am Pavel'},
            {id: '4', message: 'Who is you?'},
        ],
    },
    profilePage: {
        postsData: [
            {id: '1', message: 'Hi', likesCount: 12},
            {id: '2', message: 'How are you?', likesCount: 13},
            {id: '3', message: 'I am Pavel', likesCount: 14},
            {id: '4', message: 'Who is you?', likesCount: 15},
        ]
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: '5',
        message: postMessage,
        likesCount: 0
    }
    return state.profilePage.postsData.push(newPost)
}


export default state