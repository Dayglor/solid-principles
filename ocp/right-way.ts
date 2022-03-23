

abstract class AbstractVideo {
    abstract calculateInteress():void;
}

class Movie extends AbstractVideo {
    calculateInteress(): void {
        // do something
    }
}

class TVShow extends Movie {
    calculateInteress(): void {
        // do something
    }
}