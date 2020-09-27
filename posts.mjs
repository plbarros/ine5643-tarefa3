class posts {

    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z
        this.addPost = this.addPost.bind(this);
        this.addPost(this.x, this.y, this.z)
    }

    addPost(x,y,z){
        const novo = document.createElement("div");
        const likedislike = document.createElement("div");
        novo.className = "post";
        likedislike.className = "like_dislike";
        const h = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const btn = document.createElement("button");
        const imgBtn = document.createElement("img");
        const pbtn = document.createElement("input");
        btn.id = "likebtn";
        imgBtn.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdYVhX5DL3EBzWMyaj-ABI7CcGGyDmqUCGPg&usqp=CAU)");
        //btn.className = "like";
        imgBtn.className = "likeImg";
        h.className = "h2";
        p.className = "p";
        pbtn.id = "p_btn";
        pbtn.type = "number";
        pbtn.name = "number";
        pbtn.value = 0;
        img.setAttribute("src", z);
        img.className = "postImg";
        const t1 = document.createTextNode(x);
        const t2 = document.createTextNode(y);
        h.appendChild(t1);
        p.appendChild(t2);
        btn.appendChild(imgBtn);
        novo.appendChild(h);
        novo.appendChild(p);
        novo.appendChild(img);
        likedislike.appendChild(btn);
        likedislike.appendChild(pbtn);
        const d1 = document.getElementById("posts");
        d1.insertAdjacentElement('afterbegin', likedislike);
        d1.insertAdjacentElement('afterbegin', novo);
        
    
    }
    
    export {posts};
