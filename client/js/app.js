// ********************************************
// SETUP
const form = document.querySelector('#new-post-form');
const postsList = document.querySelector('#post-list');

// Bind event listeners
form.addEventListener('submit', submitPost);

// Fetch all cats as soon as app is loaded
getAllPosts();

// ********************************************

// POSTS FLOW
// index
function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

// create
function submitPost(e){
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};




// helpers
function appendPosts(data){
    data.posts.forEach(appendPost);
};

function appendPost(postData){
    const newRow = document.createElement('div');
    newRow.classList.add('card');
    newRow.classList.add('bg-light');
    const postLi = formatPostTr(postData, newRow)
    postsList.append(newRow);
};


function formatPostTr(post, li){
    const titleTd = document.createElement('h2');
    const pseudonymTd = document.createElement('h4');
    const bodyTd = document.createElement('p');

    // titleTd.classList.add('card-header');

    titleTd.textContent = post.title
    pseudonymTd.textContent = post.pseudonym
    bodyTd.textContent = post.body


    li.append(titleTd)
    li.append(pseudonymTd)
    li.append(bodyTd)

    return li
}



