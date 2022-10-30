const bodyGallery = document.body;
bodyGallery.className = 'bodyHeightGallery';



function likeAndSaveOrNot(){
    const likes = document.querySelectorAll('.like');
    likes.forEach(like => {
        like.addEventListener('click', (el)=>{
            el.target.classList.toggle('liked');
            el.target.classList.toggle('notLiked');
            if (el.target.classList.contains('liked')){
                const imageNumber = el.path[2].classList[1]
                const number = imageNumber[5]
                localStorage.setItem( imageNumber ,`img${number}`)
                console.log('im like')
            } else if (el.target.classList.toggle('notLiked')){
                const imgDelete = el.path[2].classList[1];
                localStorage.removeItem(imgDelete);
                console.log('deleted');
            };
        });
    });
};

likeAndSaveOrNot();



function isItLiked(){
    const likeButtons = document.querySelectorAll('.like');
    likeButtons.forEach(likeButton=>{
        if (localStorage.getItem(likeButton.id)){
            if (likeButton.id === 'image1'){
                document.querySelector('#image1').className = 'pressedLikeForImage1';
            }else{
                document.querySelector(`#${likeButton.id}`).className = 'pressedLike';
            }
        };
    });
};

isItLiked();

