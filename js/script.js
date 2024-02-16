/* 
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
 Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 
- Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 
- Se clicchiamo sul tasto "Mi Piace" 
cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

//BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

*/

/* 
Milestone 1 
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
 Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>) 

*/

const posts = [
    {
        "id": 1,
        "content": "Tronco d'albero🌲. I colori dell'autunno",
        "media": "https://unsplash.it/600/300?image=161",
        "author": {
            "name": "Marco Rossi",
            "image": "https://unsplash.it/300/300?image=1"
        },
        "likes": 80,
        "date": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Vecchi disegni e la loro raccolta📚   ✍🏻",
        "media": "https://unsplash.it/600/400?image=998",
        "author": {
            "name": "Sofia Giudice",
            "image": "https://unsplash.it/300/300?image=9"
        },
        "likes": 120,
        "date": "2021-09-03"
    },
];

// memorizzo i miei elementi dello slider
//const sliderElement = document.querySelector("#slider");

/* for (let i = 0; i < posts.length; i++){
   
    
    const singlePost = document.createElement("section");
    // singlePost.className = "posts"; 
    
    
    console.log(singlePost);
    const actualPost = posts[i]; 
    console.log(actualPost)
    const singleDetailPost = document.createElement("section1");
    
    for(let key in actualPost){

       ;
        // console.log(singleDetailPost);
        console.log(actualPost.author.name); 
        //singleDetailPost.innerHTML += `${actualPost[key]}`; 
        if (key == "id"){
            const idElement = document.createElement("div");
            idElement.className ="id";
            console.log(idElement);
            idElement.innerHTML = actualPost.id;
            singlePost.append(idElement);

        }
        if (key == "content" ){
            
            const postContentElement = document.createElement("div");
            postContentElement.className = "content";

            postContentElement.innerHTML = actualPost.content;
            
            
            singlePost.append(postContentElement);
        }
        if (key == "media" ){
            
            const postImageElement = document.createElement("img");
            postImageElement.src = actualPost.media;
            
            
            singlePost.append(postImageElement);
        }
        if (key == "author"){
            const profileImageElement = document.createElement("img");
            profileImageElement.className = "img-small"; 
            profileImageElement.src = actualPost.author.image;
            singleDetailPost.append(profileImageElement);

            
            // console.log(profileImageElement); 

            const authorElement = document.createElement("div");
            
            console.log(authorElement);
            authorElement.innerHTML = `${actualPost.author.name} <br> ${actualPost.date}`;
            
            singleDetailPost.append(authorElement);
            
            
        }
        // if(key == "date"){
         //   const dateElement = document.createElement("div");
         //   dateElement.className = "date";
            
         //   dateElement.innerHTML = actualPost.date;
          //  singleDetailPost.append(dateElement);
       // } 
        if(key == "likes"){
            const likesElement = document.createElement("div");
            likesElement.className = "likes";
            likesElement.innerHTML = ` Piace a ${actualPost.likes} persone`;
            singlePost.append(likesElement);
        }
        singlePost.append(singleDetailPost)

    }
    
    
    sliderElement.append(singlePost);

}
document.querySelector("#mi-piace").addEventListener("click", function(){
    
}); */
const Likeposts = [];
const containerElement = document.querySelector(".container");
posts.forEach(function (currentPost) { 
    console.log(currentPost);
    containerElement.innerHTML += `
     <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${currentPost.author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${currentPost.author.name}</div>
                            <div class="post-meta__time">${currentPost.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${currentPost.content}</div>
                <div class="post__image">
                    <img src="${currentPost.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${currentPost.id}" class="js-likes-counter">${currentPost.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
    `;

    const currentLikeButton = document.querySelector(`a[data-postid="1"]`);
    console.log(currentLikeButton)
    

    currentLikeButton.addEventListener("click", (e) => { //la 'e' di event
        e.preventDefault();
        //ripassare lezione in classe per capire ciò
        console.log("click")
    })
})