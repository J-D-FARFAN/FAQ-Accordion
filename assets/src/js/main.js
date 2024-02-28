let accordion = document.getElementsByClassName("info__accordion__line")

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('activeAccordion')
    })
}