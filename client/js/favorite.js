const bodyFavorite = document.body;
const message = document.querySelector('.message');
const galleryContainer = document.querySelector('.gallery-container');
const images = [ 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12'];




function isAnythingInLocalStorage(){
    for (let i = 0; i < images.length; i++){
        if (localStorage.getItem(images[i])){
            message.style.display = 'none';
            const name = images[i];
            console.log(name);
            document.querySelector(`.${name}`).style.display = 'flex'; 
            galleryContainer.className = 'galleryContainerBorderShow'; 
        }
    };
};

isAnythingInLocalStorage();



function removeFromFavorites(){
    const dislikes = document.querySelectorAll('.likeFavorites');
    dislikes.forEach(dislike=>{
        dislike.addEventListener('click', (el)=>{
            el.target.classList.toggle('notLiked');
            if (dislike.classList.contains('notLiked')){
                const imgToRemove = el.path[2].classList[1];
                localStorage.removeItem(imgToRemove);
                location.reload();
            }
        })    
    })
}

removeFromFavorites();




