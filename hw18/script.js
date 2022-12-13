
const BASE_URL = "https://jsonplaceholder.typicode.com";

const container = document.getElementById("container");

const get = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "json";
  
      xhr.send();
  
      xhr.onload = () => {
        const { status, response } = xhr;
        if (status === 200) {
          resolve(response);
        } else {
          reject({
            status,
          });
        }
      };
  
      xhr.onerror = () => {
        reject({});
      };
    });
  };
  
const renderPost = (post, container) => {
    const { title, body } = post;
      
    const postContainer = document.createElement("div");
    const titleElem = document.createElement("h2");
    const bodyElem = document.createElement("p");
    const button = document.createElement("button");

    postContainer.classList.add("post_container");
    button.classList.add("button");
  
    titleElem.innerText = title;
    button.innerText = "Show comments";
    bodyElem.innerText = body;
  
    postContainer.append(titleElem, bodyElem, button);
    const postId = post.id;
    

    container.append(postContainer)

    button.addEventListener('click', (event) => {
      getPostComments(postId, event)
    });

};

const getPostComments = (id, event) => {
    get(`${BASE_URL}/posts/${id}/comments`)
      .then((response) => {
        let button = event.target;
        let parent = event.target.parentNode;

        if (button.innerText === "Show comments") {
            button.innerText = "Hide comments";
            response.forEach(com => {
              showPostComments(com, parent);
            })
        } else if (button.innerText === "Hide comments") {
          button.innerText = "Show comments";
          
          hidePostComments(parent);
        }

      });
}


const showPostComments = (comment, div) => {
    const commentContainer = document.createElement("div");
    const bodyElem = document.createElement("p");

    bodyElem.classList.add("comment_container");

    const { body } = comment;
    
    bodyElem.innerText = body;

    commentContainer.append(bodyElem);
        

    div.append(commentContainer);
}


const hidePostComments = (div) => {
        div.remove();
}



get(`${BASE_URL}/posts/`)
  .then((response) => response.forEach(post => {
    renderPost(post, container)
  }))
  .catch((err) => {
    if (err.status !== undefined) {
      if (err.status === 404) {
        alert("Post not found ");
      }
    }
  });

   

  