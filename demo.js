`<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>`






  if(counter === 3){
      ashKetchum.all();
      console.log(ashKetchum);
      let render = function(){
        for (let i = 0; i < ashKetchum.roster.length; i++){
          let container = `<div id="pokeCard${i}" class="carousel-item red white-text"></div>`, 
            choiceBanner =`<h1>${ashKetchum.roster[i].name}</h1>`,
            choiceBlock = `<div></div>`,
            choicePic = `<img class="rosterPic" src="${ashKetchum.roster[i].pic}">`,
            choiceStats = `<p class="white-text">${ashKetchum.roster[i].stringRender()}</p>`,
            choiceAbil = `<p class="white-text">${ashKetchum.roster[i].abilities}</p>`;
          
            if(i===0){$('.carousel-item').attr('href', '#one!');}
            else if (i===1){$('.carousel-item').attr('href', '#two!');}
            else if (i===2){$('.carousel-item').attr('href', '#three!');}
            else{//donothing!!!
            }
          $(choiceBlock).append(choicePic).append(choiceStats).append(choiceAbil);
          $('.carousel.carousel-slider.center').append(container);
          $(`#pokeCard${i}`).append(choiceBanner).append(choiceBlock);
             $('.carousel.carousel-slider').carousel({
                  fullWidth: true,
                  indicators: true,
                  dist: 0
                });

        }
      }
      render();
      
  }



  