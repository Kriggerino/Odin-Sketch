const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
let firstGrid = 24;
const createGrid = (amountOfGrid) =>{
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for (let i = 0; i < amountOfGrid; i++){
        //Create row div
        const row = document.createElement('div')
        row.classList.add('grid-row')
        
        for (let j = 0; j < amountOfGrid; j++){
            //Inside row, create and append gridbox div to row div
            const widthAndHeight = 800/ amountOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mousedown', () =>{
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        //Add row to container
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

createGrid(firstGrid) // Init default grid 

resetButton.addEventListener('click', () =>{
    let userSize = Number(prompt('New grid size?'))
    while(userSize > 100){
         let userSize = Number(prompt('New grid size? 100 is too big'))

    }
    const wrapper = document.querySelector('.wrapper')
    if(!wrapper){
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
    
})

