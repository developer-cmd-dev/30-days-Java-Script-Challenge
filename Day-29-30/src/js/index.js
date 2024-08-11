console.log('Connect')

const paginationBtn = document.querySelectorAll('.pagination')
const mainPage = document.querySelector('.main-page')
const userPage = document.querySelector('.user-page')
const createPostPage = document.querySelector('.create-post')
const userPost = document.querySelector('.post');
const totalPost = document.getElementById('totalPost')


function handlePagination() {
    paginationBtn.forEach((e, index) => {
        e.addEventListener('click', () => {
            if (index == 1) {
                mainPage.style.display = 'none'
                userPage.style.display = 'flex'
            }
            if (index == 0) {
                mainPage.style.display = 'flex'
                userPage.style.display = 'none'
            }
            if (index == 2) {
                createPostPage.style.display = 'flex'
            }
        })
    })
}

handlePagination()




const closeBtn = document.getElementById('close-btn');
const takeImage = document.getElementById('takeImage');
const previewImage = document.getElementById('previewImage');
const postBtn = document.getElementById('post-btn');
const caption = document.getElementById('caption')

function createPost() {
    closeBtn.addEventListener('click', () => createPostPage.style.display = 'none')


    let imgSrc = ''
    takeImage.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result
                imgSrc = e.target.result
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        }

    });
    let dataArr = []
    let data = JSON.parse(localStorage.getItem('postData'))
    !data ? console.log('ls is empty') : data.forEach((e) => dataArr.push(e))

    postBtn.addEventListener('click', () => {
        if (imgSrc == '') {
            alert('Please Fill field')
        } else {
            let obj = {
                imgPath: imgSrc,
                caption: caption.value,
                like:null,
                Comments:null
            }
            dataArr.push(obj)
            localStorage.setItem('postData', JSON.stringify(dataArr))
            createPostPage.style.display = 'none'
            displayPosts()
        }
    })


}

createPost()



const postContainer = document.querySelector('.post-container')
function displayPosts() {

    const data = JSON.parse(localStorage.getItem('postData'));
    if (!data) {
        postContainer.innerHTML = `<h1 style="height:500px;color:white;display:flex;align-items:center;justify-content:center;color: rgba(128, 128, 128, 0.281);">No post</h1>`

    } else {
        postContainer.innerHTML = ''
        data.forEach(element => {
            let html = ` <div class="post-items">
                    <div class="picture" style="background-image:url(${element.imgPath})">
    
                    </div>
                    <div class="post-menu">
    
                        <div class="post-menu-btns">
                            <div class="like-comments">
                                <img src="../../public/Icones/lucide--heart.png" alt="">
                                <img src="../../public/Icones/lucide--message-circle.png" alt="">
    
                            </div>
                            <div class="bookmark">
                                <img src="../../public/Icones/material-symbols--bookmark-outline-rounded.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                    <p>${element.caption}</p>
                    </div>
                    <div class="add-comments">
                        <input type="text" placeholder="Add Comments">
                    </div>
                </div>`
            postContainer.innerHTML += html
    
        });
    }
  
    profile(data)
}

displayPosts()



console.log()
function profile(data){
    console.log(data)
    if (!data) {
        userPost.innerHTML = `<h1 style="height:500px; width:74.5vw;color:white;display:flex;align-items:center;justify-content:center;color: rgba(128, 128, 128, 0.281); ">No post</h1>`

    } else {
        userPost.innerHTML = ''
        data.forEach((e)=>{
            let html = ` <div class="user-post-items">
            <div class="post-pic"style="background-image:url(${e.imgPath})">
    
            </div>
            <div class="user-post-menu">
    
                <div class="user-post-menu-btns">
                    <div class="like-comments-on-post">
                        <img src="../../public/Icones/lucide--heart.png" alt="">
                        <img src="../../public/Icones/lucide--message-circle.png" alt="">
    
                    </div>
                    <div class="user-bookmark">
                        <img src="../../public/Icones/material-symbols--bookmark-outline-rounded.png" alt="">
                    </div>
                </div>
            </div>
                <div>
                    <p>${e.caption}</p>
                    </div>
            <div class="user-add-comments">
                <input type="text" placeholder="Add Comments">
            </div>
        </div>`
    
            userPost.innerHTML +=html
    
        })
    }
   
    !data?console.log('data is empty'):totalPost.innerText =`${data.length} Posts`





}

