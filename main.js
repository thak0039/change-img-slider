   var images = document.querySelectorAll(".myimg");
   var popImg = document.querySelector(".main-img img");
   //    console.log(images);
   for (const image of images) {
       image.addEventListener("click", () => {
           let getsrc = image.src;
           //    console.log(getsrc);
           document.querySelector(".pop-up").style.display = "block";
           document.querySelector(".main-img img").src = getsrc;

           var closebtn = document.querySelector(".close-btn").addEventListener("click", () => {
               document.querySelector(".pop-up").style.display = "none";
           });
       });

   }
   document.querySelector(".pp-next").addEventListener("click", () => {
       for (index = 0; index < images.length; index++) {
           if (popImg.src == images[index].src) {
               if (index <= images.length) {
                   popImg.src = images[++index].src;
                   document.querySelector(".index-num").innerHTML = [images.length] + "/" + index;
                   break;
               }

           }

       }

   });
   document.querySelector(".pp-prev").addEventListener("click", () => {
       for (index = 0; index < images.length; index++) {
           if (popImg.src === images[index].src) {
               if (index >= 1) {
                   popImg.src = images[--index].src;
                   document.querySelector(".index-num").innerHTML = [images.length] + "/" + index;
                   break;
               }

           }

       }

   })