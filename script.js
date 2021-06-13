document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid-container')
    const width = 5;
    const squares = []
    const blanks = []

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'pink',
        'green',
        'blue'
    ]

    const blankcolor = [
        'white'
    ]



    function createBoard() {
        for (let i = 0; i < width*width; i++){
              const square = document.createElement('div')
              square.setAttribute('draggable', true)
              square.setAttribute('id', i)
              let randomColor = Math.floor(Math.random() * candyColors.length)
                square.style.backgroundColor = candyColors[randomColor]
                grid.appendChild(square);
                squares.push(square); 
        }}
            
            
            // else 
            // const blank = document.createElement('div')
            // blank.setAttribute('draggable', true)
            // blank.setAttribute('id',i)
            // blank.style.backgroundColor = blankcolors;
            // blank.style.borderWidth = 4;
            // grid.append(blank);
            // blanks.push(blank);
            // break
    
    createBoard()

    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))

    blanks.forEach(blank => blank.addEventListener('dragstart', dragStart))
    blanks.forEach(blank => blank.addEventListener('dragend', dragEnd))
    blanks.forEach(blank => blank.addEventListener('dragover', dragOver))
    blanks.forEach(blank => blank.addEventListener('dragenter', dragEnter))
    blanks.forEach(blank => blank.addEventListener('dragleave', dragLeave))
    blanks.forEach(blank => blank.addEventListener('drop', dragDrop))

    function dragStart() {
        console.log(this.id, 'dragstart')
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(colorBeingDragged)
    }

    function dragEnd() {
        console.log(this.id, 'dragend')
        let validMoves = [
            squareBeingDragged -1,
            squareIdBeingDragged -width,
            squareBeingDragged +1,
            squareIdBeingDragged +width
        ]
        let validMove = validMoves.includes(squareIdBeingReplaced)

        if(squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null
        } else if (squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
        } else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }

    function dragOver(e) {
        e.preventDefault()
        console.log(this.id, 'dragover')
    }

    function dragEnter(e) {
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }

    function dragLeave() {
        console.log(this.id, 'dragleave')
    }

    function dragDrop() {
        console.log(this.id, 'dragdrop')
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }



    // createBoard()

    // let colorBeingDragged
    // let colorBeingReplaced
    // let blankIdBeingDragged
    // let blankIdBeingReplaced

    // blanks.forEach(blank => blank.addEventListener('dragstart', dragStart))
    // blanks.forEach(blank => blank.addEventListener('dragend', dragEnd))
    // blanks.forEach(blank => blank.addEventListener('dragover', dragOver))
    // blanks.forEach(blank => blank.addEventListener('draenter', dragEnter))
    // blanks.forEach(blank => blank.addEventListener('dragleave', dragLeave))
    // blanks.forEach(blank => blank.addEventListener('drop', dragDrop))

    // function dragStart() {
    //     console.log(this.id, 'dragstart')
    //     colorBeingDragged = this.style.backgroundColor
    //     blankIdBeingDragged = parseInt(this.id)
    //     console.log(colorBeingDragged)
    // }

    // function dragEnd() {
    //     console.log(this.id, 'dragend')
    //     let validMoves = [
    //         blankBeingDragged -1,
    //         blankIdBeingDragged -width,
    //         blankBeingDragged +1,
    //         blankIdBeingDragged +width
    //     ]
    //     let validMove = validMoves.includes(blankIdBeingReplaced)

    //     if(blankIdBeingReplaced && validMove) {
    //         blankIdBeingReplaced = null
    //     } else if (blankIdBeingReplaced && !validMove) {
    //         blanks[blankIdBeingReplaced].style.backgroundColor = colorBeingReplaced
    //         blanks[blankIdBeingDragged].style.backgroundColor = colorBeingDragged
    //     } else blanks[blankIdBeingDragged].style.backgroundColor = colorBeingDragged
    // }

    // function dragOver(e) {
    //     e.preventDefault()
    //     console.log(this.id, 'dragover')
    // }

    // function dragEnter(e) {
    //     e.preventDefault()
    //     console.log(this.id, 'dragenter')
    // }

    // function dragLeave() {
    //     console.log(this.id, 'dragleave')
    // }

    // function dragDrop() {
    //     console.log(this.id, 'dragdrop')
    //     colorBeingReplaced = this.style.backgroundColor
    //     blankIdBeingReplaced = parseInt(this.id)
    //     this.style.backgroundColor = colorBeingDragged
    //     blanks[blankIdBeingDragged].style.backgroundColor = colorBeingReplaced}
})