
  var images = [
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.jpg',
  'img/6.png',
  'img/7.jpg',
  'img/8.png',
  'img/9.png',
  'img/10.png',
  'img/11.png',
  'img/12.png',
  'img/13.png',
  'img/14.png',
  'img/15.png',
  'img/16.png',
  'img/17.jpg',
  'img/18.png',
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.jpg',
  'img/6.png',
  'img/7.jpg',
  'img/8.png',
  'img/9.png',
  'img/10.png',
  'img/11.png',
  'img/12.png',
  'img/13.png',
  'img/14.png',
  'img/15.png',
  'img/16.png',
  'img/17.jpg',
  'img/18.png'
 
];


  var tempElt1 = "";
  var tempElt2 = "";
  var click = -1;
  var win = 0;
  var score = 0;
  var time = 0;


  var boxElts = document.getElementsByClassName("box");
  var mainElt = document.querySelector(".main");
  var timeElt = document.querySelector("#time");
  var scoreElt = document.querySelector("#score");
  var postElt = document.querySelector("#post");
  var finalElt = document.querySelector("#final");
 




for (let i = 0; i < 36; i++) {
  var rand = Math.floor(Math.random() * (images.length - 1));
  boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
  images.splice(rand, 1);

}


mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
    // make sure the box is playable
    // Ստուգում ենք որ խաղացողը սեղմի պատուհանի վրա
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");
      console.log(e.target);
      console.log(e.target.firstChild );
      console.log(e );
      
      // first of two click
      // 1ին կամ 2րդ սեղմումը
      if (click < 1) { 
        tempElt1 = e.target;
        
        // timer
        if (click === -1) {
          timer = setInterval(function() {
            time++;
            timeElt.innerHTML = time;
          }, 1000);
        }
        click = 1;
      }
  
      // second click
      //2 -դ սեղմումը
      else if (e.target !== tempElt1) {
        tempElt2 = e.target;
  
        // different images
        // տարբեր նկարներ
        if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
          mainElt.removeEventListener("click", gameLogic);
          setTimeout( function() {
            tempElt1.firstChild.classList.add("hidden");
            tempElt2.firstChild.classList.add("hidden");
            mainElt.addEventListener("click", gameLogic);
          }, 400);
          if (score > 0) {
            score -= 2;
          }
          scoreElt.innerHTML = score;
        }
  
        // այո նույն նկարը շարունակեք նույն տեմպով
        else {
          score += 10;
          win += 2;
          tempElt1.firstChild.classList.add("outlined");
          tempElt2.firstChild.classList.add("outlined");
          tempElt1.classList.remove("play");
          tempElt2.classList.remove("play");
          scoreElt.innerHTML = score;
  
          // Խաղի ավարտը
          if (win === 36) {
            clearInterval(timer);
            finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
            postElt.classList.remove("hidden");
          }
        }
        click = 0;
      }
    }
}



