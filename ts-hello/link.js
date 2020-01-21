var Likes = (function () {
    function Likes(nbLikes_) {
        this.nbLikes_ = nbLikes_;
        this.linkeState_ = true;
    }
    Likes.prototype.like = function () {
        this.linkeState_ = false;
        this.nbLikes_++;
    };

    Likes.prototype.unLike = function () {
        this.linkeState_ = true;
        this.nbLikes_--;
    };

    Object.defineProperty(Likes.prototype, "nbLikes", {
        get: function () {
            return this.nbLikes_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Likes.prototype, "linkeState", {
        get: function () {
            return this.linkeState_;
        },
        enumerable: true,
        configurable: true
    });
    return Likes;
})();
