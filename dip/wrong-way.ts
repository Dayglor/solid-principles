

class DramaCategory {

    __constructor(){
    }

    getName():string{
        return 'My favority Drama Category';
    }
}

class TVSHow {
    name:string;
    category:DramaCategory;// = new DramaCategory;

    // constructor(category:DramaCategory) {
    //     this.cate
    // }
    
    setName(name:string):void{
        this.name = name;
    }

    setCategory(category:DramaCategory):void{
        this.category = category;
    }

    // getCategory():DramaCategory{
    //     const category = new this.category;
    //     return category
    // }

}