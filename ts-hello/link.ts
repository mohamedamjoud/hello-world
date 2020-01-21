 class Likes {
    private linkeState_ : boolean = true;
    constructor(public nbLikes_ : number) {
        
    }

    like(){
        this.linkeState_ = false;
        this.nbLikes_++;
    }

    unLike(){
        this.linkeState_ = true;
        this.nbLikes_--;
    }

    get nbLikes() {
        return this.nbLikes_;
    } 
    get linkeState() {
        return this.linkeState_;
    } 
}
