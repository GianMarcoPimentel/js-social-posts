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



/* Milestone 1 
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null,
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// creo un nuovo array per la Milestone 3
const likesPosts = [];
// copio il codice html della pagina  ela scrivo trmite JS
/* 
Milestone 2 
- Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/

// ciclo ogni elemento dell'array
const containerElement = document.querySelector("#container");

 //console.log(containerElement);
posts.forEach(function(currentPost){ // ha bisogno di un nome che di volta in volta si prenda i singoli elementi dell'array;
    // creo elemento vuoto in html
    const newPost = document.createElement("div");

    //gestisco la data
    const oldDate = new Date(currentPost.created)
    //console.log(oldDate)
    const newDate = oldDate.toLocaleDateString("it-IT");
    //ci scrivo dentro
    newPost.innerHTML = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${currentPost.author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${currentPost.author.name}</div>
                            <div class="post-meta__time">${newDate}</div>
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
                            <a class="like-button  js-like-button" href="#" data-postid="${currentPost.id}">
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
    `
    // gli do una classe 
    newPost.className = "post"
    //lo appendo al container
  containerElement.append(newPost);
/* 
Milestone 3 
- Se clicchiamo sul tasto "Mi Piace" 
cambiamo il colore al testo del bottone 
e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

*/
// al click del pulsante
// devo prendere l'id del post
// fare push dentro l'array likesPosts

// la proprietà che distingue gli id è data-postid-
// devo b ersagliare un elemento tramite il suo attributo
// quindi uso la prorpietà attribute
// ma devo distinguerle per valore 
// quindi uso attribute="value";

//console.log(document.querySelectorAll(`a[data-postid="3"]`));
//console.log(document.querySelectorAll(".like-button"));
//siccome non devo fare un secondo ciclo lavoro in base all'attributo

//console.log(document.querySelectorAll(`a[data-postid="currentPost.id"]`));

// memorizzo il pulsante del like del post attuale
// lo prendo sfruttando il fatto che ogni pulsante del like abbia un valore
// diverso per il parametro (ragionamneto fatto per data-postid="")
const currentLikeButton = document.querySelector(`a[data-postid="${currentPost.id}"]`);
//console.log(currentLikeButton);

        currentLikeButton.addEventListener("click", (e) => {
            // la mi <a> , il mip link sta cercando un href dove portarmi che al momento è #
            // come impedire a un pulsante di avere comportamente di un link
            e.preventDefault(); 
            // blocca il comporatmento di default del click
            //essendo a si comporatva come un link
            //console.log("click",currentPost.id); 
            
            // ogni volta che clicco il mio pulsante mi comparirà il console "click + l'id del post del pulsante cliccato"
            // da qua prendo l'id del mio currentpost e pusharlo dntro l'array del post con i like
            /* likesPosts.push(currentPost.id);
            console.log(likesPosts) */
            // controllo se ho gia messo mi piace al post
            if ( ! likesPosts.includes(currentPost.id)){
                // aggungo la classe per far si che diventi verde una volt premuto
                likesPosts.push(currentPost.id);

                currentLikeButton.classList.add("like-button--liked");
                //aumento il numero likes
                currentPost.likes += 1;
                console.log(currentPost.likes)
                
                const currentLikeCounter = document.querySelector(`#like-counter-${currentPost.id}`);
                currentLikeCounter.innerHTML = currentPost.likes;
               //currentLikeButton.classList.add("like-button liked");

               
            }
           
            // vedo che mi prende solo l'ultimo valore e quindi sta sovra scrivendo
            // mi creo un altro variabile in cui andro a inserire il mio array di oggetti
            // e poi andrò ad appenderlo nel mio container
          
            
        });
});


const data = new Date (`2021-10-22`)

console.log(data.getDay())
console.log(data.getFullYear())
console.log(data.getDate())
console.log(data.getMonth()+1)
console.log(data.toLocaleDateString("it-IT"))
// trovato il metodo per leggere la data in lingua italiana
// vado a scriverlo nei post


























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
//const likePosts = [];
//const containerElement = document.querySelector(".container");
/* posts.forEach(function (currentPost) { 
    console.log(currentPost);
    const newPost = document.createElement("div");
    
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
    newPost.className = "post";
    containerElement.append(newPost);



    const currentLikeButton = document.querySelector(`a[data-postid="1"]`);
    console.log(currentLikeButton)
    

    currentLikeButton.addEventListener("click", (e) => { //la 'e' di event
        e.preventDefault();
        if(!likePosts.includes(currentPost.id)) {
            likePosts.push(currentPost.id);
            currentLikeButton.classList.add("like.button-liked")
            currentPost.likes++;

        }
        //ripassare lezione in classe per capire ciò
        console.log("click", currentPost.id)
        
    })
}) */