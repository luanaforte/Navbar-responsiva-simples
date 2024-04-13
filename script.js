let button = document.querySelector('.btn')

function ActiveButton() {

    button.addEventListener('click', function(){
        let navList = document.querySelector('.nav-list')

        navList.classList.toggle('active')
    });
}
ActiveButton()
