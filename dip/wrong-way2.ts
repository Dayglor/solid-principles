

class DramaCategory2 {

    __constructor(){
    }

    getName():string{
        return 'My favority Drama Category';
    }
}

class TVSHow2 {
    name:string;
    category:DramaCategory2;// = new DramaCategory;

    // constructor(category:DramaCategory) {
    //     this.cate
    // }
    
    setName(name:string):void{
        this.name = name;
    }

    setCategory(category:DramaCategory2):void{
        this.category = category;
    }

    getCategory():DramaCategory2{
        return new DramaCategory2();
         
    }

}