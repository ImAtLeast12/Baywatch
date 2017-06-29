
/*
So What I want to do is wait until they hit a button

The first button that I am going to work on is submiting the name of the Movie

Once they do that their movie is going to be addd to the movieList with a movieKey

Once that happens I am going to have an arry that looks something like this
movieList = {
                1:'Transformers',
                2:'Pearl Harbor',
            }
movieKey = Object.key(movieList)

Is their any information that I will need?

All of the movies are going to be an object so this is going to make it easier for me to add more varibles
for example I am going to have a varible for if it is a favorite or not 

when decalring it in the movie class
favorite = false

When they click the favorite button
favorite = !favorite
*/ 

let numFilms = 0

class movieClass{
    constructor(mt,mID){
        this.movieTitle = mt
        this.movieID = mID
        this.favorite = false
        this.rank = mID + 1        
    }
    favButtonClicked(){
        this.favorite = !this.favorite
    }
    upVoteClicked(){
        if (this.rank = 1){
            //can't be clicked
            /*let temp = movieList[movieKeys[0]]
            movieList[movieKeys[1]] = movieList[movieKeys[0]].rank
            movieList[movieKeys[0]] = temp*/
            const x = movieList[movieKeys[0]].rank
            const y = movieList[movieKeys[1]].rank

            movieList[movieKeys[0]].rank = y
            movieList[movieKeys[1]].rank = x
            
        }
        else{
            //find the other movie and do a switch
        }
        //can't be clicked if it has the minimum rank
    }
    downVoteClicked(){
        //can't be clicked if it has the maximum rank
        if (this.rank = numFilms){
            //can't be clicked
        }
        else{
            //find the other movie and do a switch
        }
    }    
}
//so this is good but I want to have a list of these movies
movieList = {   ///'1': new movieClass('transformers',0),
                //'2': new movieClass('pearl harbor',1),
}
//So then I want to take all of the information in the movie list and output it? I guess

//movieList[movieKeys[0]]
//      This lets me acess each of the movies individually

//So the next thing that I want to do is to be able 
function updateMovieList(MovieName){
    movieList[(numFilms+1)] = new movieClass(MovieName,numFilms)
    movieKeys = Object.keys(movieList)
    numFilms = numFilms+1
}

//Instead of using the console to make it run the function how about I run the function when I click the button?
    
 //So this is working how I want it to 

//The next step is to enter some text in the text feild
//click the add flick button 
//then make it add the thing as a div

//Some problems that I am seeing already is that this is probably no the way that he would have wanted it
//I need to some how make it take the movieClass object and make it display the name, if it is hearted and what rank it is

const list = document.querySelector('#flick-list') //this is where the new thing is going to go



//list.appendChild(newFlick)










/*const movieList = { //0:'Title 1',
                    //1:'Title 2'
                    }//This is where I want to put all of the movies it will keep the ids and stuff so it should be preety good

//Insted of just giving what the text is i can give the full object and it can figure out what all of it is
movieKeys = Object.keys(movieList)
*/


const app = {
    init: function(selectors){
        this.max = 0
        this.list = document.querySelector('#flick-list')
        document.querySelector('form#flick-form').addEventListener('submit', this.handleSubmit.bind(this))
    },

    renderListItem: function(flick){
        const item = document.createElement('li')
        item.textContent = flick.name
        return item
    },

    handleSubmit: function(ev){
        ev.preventDefault()
        const f = ev.target
        const flick  ={
            id: this.max + 1,
            name: f.flickName.value,
        }
        ++this.max
        list.appendChild(this.renderMovie(flick.name))

        updateMovieList(flick.name)
    },

     renderMovie: function(movieName){
        const newFlick = document.createElement('div')
        newFlick.textContent = movieName

        const heartButton = document.createElement('button')
        heartButton.textContent = '💖'
        heartButton.addEventListener('click',this.favoriteClicked)
        heartButton.tag = numFilms

        const upVoteButton = document.createElement('button')
        upVoteButton.textContent = '👍'
        upVoteButton.addEventListener('click',this.thumbUPClicked)

        const downVoteButton = document.createElement('button')
        downVoteButton.textContent = '👎'
        downVoteButton.addEventListener('click',this.thumbDOWNClicked)

        const removeButton = document.createElement('button')
        removeButton.textContent = '🗑️'
        removeButton.addEventListener('click',this.removeClicked)

        newFlick.appendChild(heartButton)
        newFlick.appendChild(upVoteButton)
        newFlick.appendChild(downVoteButton)
        newFlick.appendChild(removeButton)
        return newFlick
    },
    favoriteClicked: function(ev){
        //console.log("favbutt")
        console.log(ev.target.tag)
        movieList[movieKeys[ev.target.tag]].favButtonClicked()

        if(movieList[movieKeys[ev.target.tag]].favorite)
            ev.target.textContent = '💔'
        else
            ev.target.textContent = '💖'
    },
    thumbUPClicked: function(){
        console.log("upbutt")
    },
    thumbDOWNClicked: function(){
        console.log("downbutt")
    },
    removeClicked: function(){
        console.log("removebutt")
    }



}




/*const list = document.querySelector('#flick-list')
const movie = document.createElement('button')
movie.textContent = "MovieName"
movie.style.background = 'red'
list.appendChild(movie)*/



app.init({formSelector: 'form#flick-form',
            listSelector: 'listSelector',})

/*
const movie = function(){
    movieTitle: setMovieTitle(),
    movieKey: setMovieKey(),
    setMovieTitle: function(movieTitle){
        this.movieTitle = 'this'
    },
    setMovieKey: function(movieKey){
        this.movieKey = 'this'
    }

}*/