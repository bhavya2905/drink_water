 const scups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('.liters');
 const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
updateCup();

scups.forEach((cup, idx) => {
    cup.addEventListener('click',() => highlightCups(idx))
})
 
function highlightCups(idx) {
    if(scups[idx].classList.contains('full') && !scups[idx].nextElementSibling.classList.contains('full')){
        idx--;

    }
    scups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateCup();
}

function updateCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totCups = scups.length
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0

    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totCups * 300}px`
        percentage.innerText = `${fullCups / totCups *100}%`
    }
    if(fullCups === totCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}