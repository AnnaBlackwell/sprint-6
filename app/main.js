console.log('Tic tac toe!')

import { filter, addIndex, indexOf, map, append, contains } from 'ramda'

import $ from 'jquery'

var board = ['', '', '', '', '', '', '', '', '']

const winner = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O',]

const isAWin = function (board, player, win) {
  return filter((i) => board[i] === player, win).length === 3
}

const playerWins = function (board, player) {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  return filter((win) => isAWin(board, player, win), wins).length > 0
}

const whoseMoveIsIt = function (moves) {
  return (moves.length % 2 === 0) ? 'X' : 'O'
}

const moves = [4, 3, 0, 8, 2, 1, 6]

const getPlayerFromMove = function (i) {
  const idx = indexOf(i, moves)

  if (idx === -1) {
    return ''
  } else {
    return (idx % 2 === 0) ? 'X' : 'O'
  }
}

const makeBoard = function (moves) {
  const mapIndexed = addIndex(map)

  const getCellFromMove = function (i) {
    const idx = indexOf(i, moves)

    if (idx === -1) {
      return '<div class="e">&nbsp;</div>'
    } else if (idx % 2 === 0) {
      return '<div class="x">X</div>'
    } else {
      return '<div class="o">O</div>'
    }
  }

  return mapIndexed((val, idx) => getCellFromMove(idx), new Array(9))
}

var board = document.createElement('div')

board.setAttribute('class', 'board')
board.innerHTML = makeBoard([4, 3, 0, 8, 2, 1, 6]).join('')

const renderBoard = function (cells) {
  var board = document.createElement('div')

  board.setAttribute('class', 'board')
  board.innerHTML = cells

  document.getElementById('board').appendChild(board)
}

renderBoard(makeBoard([]).join(''))

const makeMove = function (cell, moves) {
  if (contains(cell, moves)) {
    return moves
  } else {
    return append(cell, moves)
  }
}

$('#board').on('click', '.ttt-cell', (e) => console.log(e))
