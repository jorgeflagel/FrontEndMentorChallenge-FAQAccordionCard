var accordion = document.querySelectorAll(".accordion_item")
accordion.forEach((faq) => {
  faq.addEventListener("click", function() {
    for (const e of accordion) {
      if (e === this) {
        // This is the first alternative
        /*
        if (e.childNodes[1].classList.contains("active")) {
          e.childNodes[1].classList.remove("active");
          e.childNodes[3].classList.add("hidden");
        } else {
          e.childNodes[1].classList.add("active");
          e.childNodes[3].classList.remove("hidden");
        } 
        */
        // This is a shorter alternative (actual)
        e.childNodes[1].classList.toggle("active");
        e.childNodes[3].classList.toggle("hidden");
      } else {
        e.childNodes[1].classList.remove("active");
        e.childNodes[3].classList.add("hidden");
      }
    }
  });
});