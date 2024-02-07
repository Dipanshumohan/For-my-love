window.addEventListener("load", () => {
  document.getElementById("js-yes").addEventListener("click", () => {
    document.getElementById("main-js").classList.add('hidden');
    document.getElementById("hidden-js").classList.toggle('hidden');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";

      heart.innerText = '💗';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

    setInterval(createHeart, 300);
  });

  const noButton = document.querySelector('button.btn-no');
  let hoverCount = 0;
  const changeTextAfterHoverCount = 1;

  noButton.addEventListener("mouseover", () => {
    const newTexts = ["hmm?", "Aaaa", "Really?", "Pleasee think againn!", "I'm gonna cry;_;", "NOOO", "NO"];
    const randomIndex = Math.floor(Math.random() * newTexts.length);

    noButton.textContent = newTexts[randomIndex];

    const i = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    noButton.style.left = i + "px";
    noButton.style.top = j + "px";

    hoverCount++;

    if (hoverCount >= changeTextAfterHoverCount) {
      hoverCount = 0;
    }
  });
});





