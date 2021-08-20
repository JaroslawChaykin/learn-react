
let store = {
    _state: {
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
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 13},
                {id: 3, message: 'I am Pavel', likesCount: 14},
                {id: 4, message: 'Who is you?', likesCount: 15},
            ],
            newPostText: ''
        }
    },
    getState () {
      return this._state
    },
    _callSubscriber() {
        console.log('Нормуль')
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.postsData.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store