class likeDislike{
    constructor(btn){
        this.btn = btn;
        this.increment = this.increment.bind(this);
        this.btn.addEventListener(onclick, this.increment(1));
    }

   increment(n){
       var a = document.getElementById("p_btn").nodeValue;
       a = a + n;
       document.getElementById("p_btn").innerHTML = a;
   }
export {likedislike};
