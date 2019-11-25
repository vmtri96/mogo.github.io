let expandHeader = document.getElementsByClassName('expand__header');
console.log(expandHeader);

for(let i = 0; i <= expandHeader.length; i++) {
    expandHeader[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.padding = null;
          content.style.border = null;
        } else {
          content.style.maxHeight = "17rem";
          content.style.padding = "1.5rem";
          content.style.border = "1px solid var(--color-grey-1)";
          content.style.borderTop = "none";
          content.style.overflowY = "scroll";

        } 
      });
}