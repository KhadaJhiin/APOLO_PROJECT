let listElements = document.querySelectorAll('.links__button--click');
listElements.forEach(listElement => {
    listElement.addEventListener('click' , ()=>{
        listElement.classList.toggle('arrow');

        let height =0;
        let menu = listElement.nextElementSibling;
        
        if(menu.clientHeight =="0"){
            height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`
    })
});

const body = document.querySelector('body'),
        sidebar=body.querySelector('nav'),
        toggle=body.querySelector(".toggle");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})