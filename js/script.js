document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.getElementById("text-container");
  const text = "vishal shekhawat - product designer - developer - ";
  const angleIncrement = 360 / text.length;

  for (let i = 0; i < text.length; i++) {
    const characters = document.createElement("div");
    characters.innerText = text[i];
    characters.classList.add("text-character");
    characters.style.transform = `rotate(${i * angleIncrement}deg)`;
    textContainer.appendChild(characters);
  }
});

WebFont.load({
  google: {
    families: [
      'Roboto:100,300,400,500,700,900',
      'Roboto+Mono:100,300,400,500,700',
      'Material+Icons'
    ]
  }
});

// Targeting video element 
let clip = document.querySelector(".vid")

/* Applying mouseover event on video clip 
and then we call play() function to play 
the video when the mouse is over the video */
clip.addEventListener("mouseover", function (e) {
  clip.play();
})

/* Applying mouseout event on video clip 
and then we call pause() function to stop 
the video when the mouse is out the video */
clip.addEventListener("mouseout", function (e) {
  clip.pause();
})

ScrollReval(
  {
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200

  }
);

ScrollReval().reveal('.boxx2a-right, .boxx2a-right-up, .text-light, .container2',
  {
    origin: 'top'
  }
)