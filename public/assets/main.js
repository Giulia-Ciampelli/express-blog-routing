console.log('im alive');
// #region variabili globali
let rowElement = document.querySelector('.row');
let postElements = '';
// #endregion variabili globali

// chiamata ajax dalla rotta posts
axios.get('http://localhost:3000/posts')
    .then(response => {
        let posts = response.data.data;
        console.log(posts);
    })