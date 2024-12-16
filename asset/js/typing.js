  const typewriter = document.querySelector('.typewriter');
    const phrases = ["Welcome to GHIMA", "Data our priority !!!", "Innovating the future."];
    let index = 0;
    let phraseIndex = 0;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let delay = 2000;

    function type() {
      if (phraseIndex < phrases[index].length) {
        typewriter.textContent += phrases[index].charAt(phraseIndex);
        phraseIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(deleteText, delay);
      }
    }

    function deleteText() {
      if (phraseIndex > 0) {
        typewriter.textContent = phrases[index].substring(0, phraseIndex - 1);
        phraseIndex--;
        setTimeout(deleteText, deletingSpeed);
      } else {
        index = (index + 1) % phrases.length;
        setTimeout(type, typingSpeed);
      }
    }

    type();
