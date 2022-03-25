interface Category {

}

class DramaCategory implements Category {

}

class Movie {
    name: string;
    category: Category;

    constructor(name:string, category: Category){
        this.name = name;
        this.category = category;
    }



}

const movie = new Movie('LikeThisMovie', DramaCategory);