const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
let sizeOfGrid = 24;
const createGrid = (amountOfGrid) =>{
    for (let i = 0; i < amountOfGrid; i++){
        //Create row div
        const row = document.createElement('div')
        row.classList.add('grid-row')
        
        for (let j = 0; j < amountOfGrid; j++){
            //Inside row, create and append gridbox div to row div
            const widthAndHeight = 800/ sizeOfGrid
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
        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)