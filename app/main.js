console.log('Tic tac toe!')

// in app/main.js
import $ from 'jquery'

import { makeMove } from './tic-tac-toe'

$('#board').on('click', '.board > div', makeMove)
