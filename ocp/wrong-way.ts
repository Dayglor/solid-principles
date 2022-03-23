class Video { 
    private type:string;
    constructor(type:string){
        this.type = type;
    }

    calculateInterest():void{
        if(this.type === 'Movie'){
            // do something
        } else if ( this.type === 'TVShow') {
            // do other something
        }
    }
}


const userVideo = new Video('Movie');
userVideo.calculateInterest();