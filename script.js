let container = document.querySelector(".container");
let body = document.querySelector("body")
let data = "data.json"
let modal = document.querySelector(".modal");
async function getData(){
    let reponse = await fetch(data);
    let responseData = await reponse.json();
    for(let i = 0; i < responseData.comments.length; i++){
        let section = document.createElement("section");
        let subContainer = document.createElement("div");
        subContainer.className = "subContainer";
        let header = document.createElement("header");
        let img = document.createElement("img");
        img.setAttribute("src", `${responseData.comments[i].user.image.png}`)
        let h2 = document.createElement("h2");
        h2.textContent = `${responseData.comments[i].user.username}`;
        let h3 = document.createElement("h3");
        h3.textContent =   `${responseData.comments[i].createdAt}`;
        let p = document.createElement("p");
        p.className = "content"
        p.textContent = `${responseData.comments[i].content}`;
        let aside = document.createElement("aside");
        let div = document.createElement("scoreBoard");
        div.className = "scoreBoard"
        let imgPlus = document.createElement("img");
        imgPlus.setAttribute("src", "images/icon-plus.svg")
        let score = document.createElement("p");
        score.className = "score"
        score.textContent = `${responseData.comments[i].score}`
        let imgMinus = document.createElement("img");
        imgMinus.setAttribute("src", "images/icon-minus.svg")
        let span = document.createElement("span");
        span.className = "replyBox"
        let replyImg = document.createElement("img");
        replyImg.setAttribute("src", "images/icon-reply.svg")
        let h4 = document.createElement("h4");
        h4.textContent = "Reply";
        section.appendChild(subContainer)
        subContainer.appendChild(header);
        subContainer.appendChild(p);
        subContainer.appendChild(aside);
        header.appendChild(img);
        header.appendChild(h2);
        header.appendChild(h3);
        aside.appendChild(div)
        aside.appendChild(span);
        div.appendChild(imgPlus);
        div.appendChild(score);
        div.appendChild(imgMinus);
        span.appendChild(replyImg);
        span.appendChild(h4);
        
        // INCREASE SCORE USING THE PLUS IMG UPVOTE 
        function upVote(){
           ` ${score.textContent++}`
        }
        imgPlus.addEventListener("click", upVote)

         // DECREASE SCORE USING THE PLUS IMG UPVOTE 
        function downVote(){
            ` ${score.textContent--}`
        }
        imgMinus.addEventListener("click", downVote)
        
        // END 

        // REPLY BOX 
        function createReply(e){
        let check = false;
            if(e.target.parentElement != "span"){
                e.target.parentElement.style.display = "none";
            }
            check = true;
            let section = document.createElement("section");
            section.className = "replyContainer createdReply"
            let textBox = document.createElement("textArea");
            textBox.setAttribute("placeholder", "Send a reply")
            let aside = document.createElement("aside");
            let img = document.createElement("img");
            img.setAttribute("src", "images/avatars/image-juliusomo.png")
            let button = document.createElement("button");
            button.textContent = "Send";
            section.appendChild(textBox);
            aside.appendChild(img);
            aside.appendChild(button);
            section.appendChild(aside);
            this.parentElement.parentElement.parentElement.appendChild(section);
        function sendBtn(){
            section.style.display = "none"
            e.target.parentElement.style.display = "flex";
            // console.log(textBox.value);
            if(!textBox.value == ""){
            let sectionreply = document.createElement("section");
            let subContainer = document.createElement("div");
            subContainer.className = "subContainer replyContainer";
            let header = document.createElement("header");
            let img = document.createElement("img");
            img.setAttribute("src", "images/avatars/image-juliusomo.png")
            let h2 = document.createElement("h2");
            h2.textContent = "juliusomo";
            let indicate = document.createElement("h3");
            indicate.className="you";
            indicate.textContent = "you"
            let h3 = document.createElement("h3");
            h3.textContent = "now"
            let p = document.createElement("p");
            p.className = "content"
            let atted = `@${responseData.comments[i].user.username}`;
            let replyText = `${textBox.value}`
            p.textContent =`${atted} ${replyText}`;
            let aside = document.createElement("aside");
            let div = document.createElement("scoreBoard");
            div.className = "scoreBoard"
            let imgPlus = document.createElement("img");
            imgPlus.setAttribute("src", "images/icon-plus.svg")
            let score = document.createElement("p");
            score.className = "score"
            score.textContent = 0;
            let imgMinus = document.createElement("img");
            imgMinus.setAttribute("src", "images/icon-minus.svg")
            let menu = document.createElement("menu");
            menu.className = "menu"
            let span = document.createElement("span");
            span.className = "replyBox deletebox"
            let deleteImg = document.createElement("img");
            deleteImg.setAttribute("src", "images/icon-delete.svg")
            let h4 = document.createElement("h4");
            h4.textContent = "Delete";
            let span2 = document.createElement("span");
            span2.className = "replyBox editbox"
            let editImg = document.createElement("img");
            editImg.setAttribute("src", "images/icon-edit.svg")
            let edith4 = document.createElement("h4");
            edith4.textContent = "Edit";
            sectionreply.appendChild(subContainer)
            subContainer.appendChild(header);
            subContainer.appendChild(p);
            subContainer.appendChild(aside);
            header.appendChild(img);
            header.appendChild(h2);
            header.appendChild(indicate);
            header.appendChild(h3);
            aside.appendChild(div)
            aside.appendChild(span);
            div.appendChild(imgPlus);
            div.appendChild(score);
            div.appendChild(imgMinus);
            aside.appendChild(menu);
            menu.appendChild(span);
            menu.appendChild(span2);
            span.appendChild(deleteImg);
            span.appendChild(h4);
            span2.appendChild(editImg);
            span2.appendChild(edith4);
            span.appendChild(h4);
            console.log(sectionreply)
            this.parentElement.parentElement.parentElement.appendChild(sectionreply)
             imgPlus.addEventListener("click", upVote)
     
              // DECREASE SCORE USING THE PLUS IMG UPVOTE 

             imgMinus.addEventListener("click", downVote);

            
            span.addEventListener("click", del)

           
            span2.addEventListener("click", edit)

        }else{
            return;
        }
        }
        button.addEventListener("click", sendBtn);
        }
    
    // UPVOTE FUNCTION 
        function upVote(){
            ` ${score.textContent++}`
        }
    // DOWN VOTE FUNCTION 
        function downVote(){
             ` ${score.textContent--}`
        }


        span.addEventListener("click", createReply)

        container.prepend(section)
        let replies = responseData.comments[i].replies;
            console.log(replies)
        let access = responseData.comments[i].replies.map((reply) => {
        if(responseData.comments[i].replies.length > 0){
            let replyContainer = document.createElement("div");
            
            replyContainer.className = "subContainer replyContainer"
            let header = document.createElement("header");
            let img = document.createElement("img");
            img.setAttribute("src", `${reply.user.image.png}`)
            let h2 = document.createElement("h2");
            h2.textContent = reply.user.username;
            let h3 = document.createElement("h3");
            h3.textContent = reply.createdAt;
            let p = document.createElement("p");
            p.className = "content replyContent"
            let final = "p";
            final = `${reply.content}`;
            let initial = "p";
            initial.className = "red"
            initial = `${reply.replyingTo}`;
            let whole = `@${initial} ${final}`
            p.textContent = whole;
            let aside = document.createElement("aside");
            let div = document.createElement("scoreBoard");
            div.className ="scoreBoard"
            let imgPlus = document.createElement("img");
            imgPlus.setAttribute("src", "images/icon-plus.svg")
            let score = document.createElement("p");
            score.className ="score"
            score.textContent = reply.score;
            let imgMinus = document.createElement("img");
            imgMinus.setAttribute("src", "images/icon-minus.svg")
            let span = document.createElement("span");
            span.className = "replyBox"
            let replyImg = document.createElement("img");
            replyImg.setAttribute("src", "images/icon-reply.svg")
            let h4 = document.createElement("h4");
            h4.textContent = "Reply";
            replyContainer.appendChild(header);
            replyContainer.appendChild(p);
            replyContainer.appendChild(aside);
            header.appendChild(img);
            header.appendChild(h2);
            header.appendChild(h3);
            aside.appendChild(div)
            aside.appendChild(span);
            div.appendChild(imgPlus);
            div.appendChild(score);
            div.appendChild(imgMinus);
            span.appendChild(replyImg);
            span.appendChild(h4);
            // console.log(imgPlus)
            section.appendChild(replyContainer);

         // INCREASE SCORE USING THE PLUS IMG UPVOTE 
        function upVote(){
            ` ${score.textContent++}`
         }
         imgPlus.addEventListener("click", upVote)
 
          // DECREASE SCORE USING THE PLUS IMG UPVOTE 
         function downVote(){
             `${score.textContent--}`
         }
         imgMinus.addEventListener("click", downVote)
         // END
         function createReply(e){
            let check = false;
             if(e.target.parentElement != "span"){
                e.target.parentElement.style.display = "none";
             }
                check = true;
                let section = document.createElement("section");
                section.className = "replyContainer createdReply"
                let textBox = document.createElement("textArea");
                textBox.setAttribute("placeholder", `@${reply.user.username}`)
                textBox.setAttribute("value", `@${reply.user.username}`)  
                let aside = document.createElement("aside");
                let img = document.createElement("img");
                img.setAttribute("src", "images/avatars/image-juliusomo.png")
                let button = document.createElement("button");
                button.textContent = "Send";
                section.appendChild(textBox);
                aside.appendChild(img);
                aside.appendChild(button);
                section.appendChild(aside);
                this.parentElement.parentElement.parentElement.appendChild(section);
            function sendBtn(){
                section.style.display = "none"
                // console.log(textBox.value);
                e.target.parentElement.style.display = "flex";
                if(!textBox.value == ""){
                let sectionreply = document.createElement("section");
                let subContainer = document.createElement("div");
                subContainer.className = "subContainer replyContainer";
                let header = document.createElement("header");
                let img = document.createElement("img");
                img.setAttribute("src", "images/avatars/image-juliusomo.png")
                let h2 = document.createElement("h2");
                h2.textContent = "juliusomo";
                let indicate = document.createElement("h3");
                indicate.className="you";
                indicate.textContent = "you"
                let h3 = document.createElement("h3");
                h3.textContent = "now"
                let p = document.createElement("p");
                p.className = "content"
                let atted = `@${responseData.comments[i].user.username}`;
                let replyText = `${textBox.value}`
                p.textContent =`${atted} ${replyText}`;
                let aside = document.createElement("aside");
                aside.className = "aside";
                let div = document.createElement("scoreBoard");
                div.className = "scoreBoard"
                let imgPlus = document.createElement("img");
                imgPlus.setAttribute("src", "images/icon-plus.svg")
                let score = document.createElement("p");
                score.className = "score"
                score.textContent = 0;
                let imgMinus = document.createElement("img");
                imgMinus.setAttribute("src", "images/icon-minus.svg")
                let menu = document.createElement("menu");
                menu.className = "menu"
                let span = document.createElement("span");
                span.className = "replyBox deletebox"
                let deleteImg = document.createElement("img");
                deleteImg.setAttribute("src", "images/icon-delete.svg")
                let h4 = document.createElement("h4");
                h4.textContent = "Delete";
                let span2 = document.createElement("span");
                span2.className = "replyBox editbox"
                let editImg = document.createElement("img");
                editImg.setAttribute("src", "images/icon-edit.svg")
                let edith4 = document.createElement("h4");
                edith4.textContent = "Edit";
                sectionreply.appendChild(subContainer)
                subContainer.appendChild(header);
                subContainer.appendChild(p);
                subContainer.appendChild(aside);
                header.appendChild(img);
                header.appendChild(h2);
                header.appendChild(indicate);
                header.appendChild(h3);
                aside.appendChild(div)
                aside.appendChild(menu);
                div.appendChild(imgPlus);
                div.appendChild(score);
                div.appendChild(imgMinus);
                menu.appendChild(span);
                menu.appendChild(span2);
                span.appendChild(deleteImg);
                span.appendChild(h4);
                span2.appendChild(editImg);
                span2.appendChild(edith4);
                // console.log(sectionreply)
                this.parentElement.parentElement.parentElement.appendChild(sectionreply)
                function upVote(){
                    ` ${score.textContent++}`
                 }
                 imgPlus.addEventListener("click", upVote)
         
                  // DECREASE SCORE USING THE PLUS IMG UPVOTE 
                 function downVote(){
                     ` ${score.textContent--}`
                 }
                 imgMinus.addEventListener("click", downVote)

                span.addEventListener("click", del)
                span2.addEventListener("click", edit)
            }else{
                return;
            }
            }
            // let button = section.querySelector("button")
            console.log(button)
            button.addEventListener("click", sendBtn);
            }

            span.addEventListener("click", createReply)

        }
        
        })

    }
    function commentBox(){
        let box = document.querySelector(".commentBox textarea")
        if(box.value == ""){
            return;
        }
        let section = document.createElement("section");
        let subContainer = document.createElement("div");
        subContainer.className = "subContainer";
        let header = document.createElement("header");
        let img = document.createElement("img");
        img.setAttribute("src", "images/avatars/image-juliusomo.png")
        let h2 = document.createElement("h2");
        h2.textContent = "juliusomo";
        let h3 = document.createElement("h3");
        h3.textContent =   "Just Now";
        let p = document.createElement("p");
        p.className = "content"
        p.textContent = "www";
        let aside = document.createElement("aside");
        let div = document.createElement("scoreBoard");
        div.className = "scoreBoard"
        let imgPlus = document.createElement("img");
        imgPlus.setAttribute("src", "images/icon-plus.svg")
        let score = document.createElement("p");
        score.className = "score"
        score.textContent = 0;
        let imgMinus = document.createElement("img");
        imgMinus.setAttribute("src", "images/icon-minus.svg")
        let menu = document.createElement("menu");
        menu.className = "menu"
        let span = document.createElement("span");
        span.className = "replyBox deletebox"
        let deleteImg = document.createElement("img");
        deleteImg.setAttribute("src", "images/icon-delete.svg")
        let h4 = document.createElement("h4");
        h4.textContent = "Delete";
        let span2 = document.createElement("span");
        span2.className = "replyBox editbox"
        let editImg = document.createElement("img");
        editImg.setAttribute("src", "images/icon-edit.svg")
        let edith4 = document.createElement("h4");
        edith4.textContent = "Edit";
        // let h4 = document.createElement("h4");
        // h4.textContent = "Reply";
        section.appendChild(subContainer)
        subContainer.appendChild(header);
        subContainer.appendChild(p);
        subContainer.appendChild(aside);
        header.appendChild(img);
        header.appendChild(h2);
        header.appendChild(h3);
        aside.appendChild(div)
        aside.appendChild(menu);
        // aside.appendChild(menu);
        menu.appendChild(span);
        menu.appendChild(span2);
        div.appendChild(imgPlus);
        div.appendChild(score);
        div.appendChild(imgMinus);
        span2.appendChild(editImg);
        span2.appendChild(edith4)
        span.appendChild(deleteImg);
        span.appendChild(h4);
        container.prepend(section);
        function upVote(){
            ` ${score.textContent++}`
         }
         imgPlus.addEventListener("click", upVote)
 
          // DECREASE SCORE USING THE PLUS IMG UPVOTE 
         function downVote(){
             ` ${score.textContent--}`
         }
        imgMinus.addEventListener("click", downVote)
        
        box.value = "";
        span.addEventListener("click", del)
        span2.addEventListener("click", edit)
    }


let send = document.querySelector(".commentBox button")    
send.addEventListener("click", commentBox);

    //  DELETE FUNCTION 
    function del(e){
        e.preventDefault();
        if(modal.style.display == "block"){
            modal.style.display = "none";
            body.style.overflow = "auto"
        }else{
            modal.style.display = "block";
            body.style.overflow = "hidden"
        }

    }
// EDIT FUNCTION 
     function edit(e){
        e.preventDefault();
        let div = document.createElement("div");
        div.className = "editBox";
        let editBox = document.createElement("textarea");
        editBox.textContent = this.parentElement.parentElement.parentElement.children[1].textContent;
        let button = document.createElement("button");
        button.textContent = "Update";
        button.className = "update"
        div.appendChild(editBox);
        div.appendChild(button);
        this.parentElement.parentElement.parentElement.appendChild(div)
        console.log(editBox)
        button.addEventListener("click", updateEdit);
    }
// UPDATE FUNCTION CALLS THE EDIT 
    function updateEdit(){
    this.parentElement.parentElement.children[1].textContent = this.parentElement.children[0].value;
    this.parentElement.remove();
}

let closeModal = document.querySelector(".cancel");

closeModal.addEventListener("click", del)
}

getData();


