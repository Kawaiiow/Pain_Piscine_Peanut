const switchToggle = document.querySelector('input[type="checkbox"]')
const toggleicon = document.getElementById('toggle-icon')

function switchMode(e){
    if (e.target.checked) {
        darkmode()
    }
    else{
        lightmode()
    }
}

function lightmode() {
    toggleicon.children[0].textContent="FLIR : DEACTIVE"
}

function darkmode() {
    toggleicon.children[0].textContent="FLIR : __ACTIVE"
}

switchToggle.addEventListener('change',switchMode);