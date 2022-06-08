/**
 * Задание 3.
 *
 * Написать функцию fillChessBoard, которая развернёт «шахматную» доску 8 на 8.
 *
 * Цвет тёмных ячеек — #161619.
 * Цвет светлых ячеек — #FFFFFF.
 * Остальные стили CSS для доски и ячеек готовы.
 *
 * Доску необходимо развернуть внутри элемента с классом .board.
 *
 * Каждая ячейка доски представляет элемент div с классом .cell.
 */

/* Дано */
const LIGHT_CELL = '#ffffff';
const DARK_CELL = '#161619';
const V_CELLS = 8;
const H_CELLS = 8;

const board = document.createElement( 'section' );
board.classList.add( 'board' );
board.style.cssText = `
grid-template-columns: repeat(${H_CELLS}, auto);
grid-template-rows: repeat(${V_CELLS}, auto);
`;
document.body.prepend( board );

const chessBoard = () => {
    let rowColor = true;
    for(let i=1; i<=V_CELLS*H_CELLS; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell");
        cell.innerHTML =`<p>${i}</p><p>${rowColor}</p><p>${i%2}</p><p>${i%V_CELLS}</p>`;
        console.log(i);
        console.log('do', rowColor);
        if(i%2 === 0) {
            cell.style.backgroundColor = rowColor? DARK_CELL : LIGHT_CELL;
        } else {
            cell.style.backgroundColor = rowColor? LIGHT_CELL : DARK_CELL;
        }
        if(i%V_CELLS === 0) {
            rowColor = !rowColor;
        }
        board.appendChild(cell)
        console.log('posle', rowColor);
    }
}
chessBoard()
