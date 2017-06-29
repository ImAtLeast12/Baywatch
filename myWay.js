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
class movieClass{
    constructor(height,width,favorite){
        this.movieTitle = mt
        this.movieID = mID
        this.favorite = false
    }
    favButtonClicked(){
        this.favorite = !this.favorite
    }
}//So I am liking this better I suppose

function movie(mT,mID)
{
    this.movieTitle = mT
    this.movieID = mID
    this.favorite = false

    this.favoritedClicked = function(){
        this.favorite = !this.favorite
    };

    
}

