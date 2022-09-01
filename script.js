let container = document.querySelector(".container");
let data = "data.json"
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
        function createReply(){
            let check = false;
            // if(!check){
                check = true;
                let section = document.createElement("section");
                section.className = "replyContainer createdReply"
                let textBox = document.createElement("textArea");
                textBox.setAttribute("placeholder", "Send a reply")
                let aside = document.createElement("aside");
                let img = document.createElement("img");
                img.setAttribute("src", "images/avatars/  image-juliusomo.png")
                let button = document.createElement("button");
                button.textContent = "Send";
                section.appendChild(textBox);
                aside.appendChild(img);
                aside.appendChild(button);
                section.appendChild(aside);
                this.parentElement.parentElement.parentElement.prepend(section);
                console.log(this.parentElement.parentElement.parentElement.appendChild(section))
            // }else{
            //     console.log(check);
            // }
        function sendBtn(){
            let section = document.createElement("section");
            textBox.textContent = section.textContent;
            console.log(section);
        }

        button.addEventListener("click", sendBtn);
        }

        

        span.addEventListener("click", createReply)

        container.appendChild(section)

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
             ` ${score.textContent--}`
         }
         imgMinus.addEventListener("click", downVote)
         // END

        }
        
        })

    }
}

getData();

