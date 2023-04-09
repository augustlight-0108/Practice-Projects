const input = document.querySelector('#input')
const output = document.querySelector('#output')
const btn = document.querySelector('#btn')
const error = document.querySelector('#error-msg')

function Bin2Dec() {
    const regEX = /^[0-1]+$/
    if(input.value.match(regEX)) {
        const binArr = input.value.split('').reverse()
        let dec = 0
        binArr.forEach((item,index) => item === '1'? dec += Math.pow(2,index) :void 0 )
        output.value = dec.toString()
        output.style.cursor = 'text'
    }else{
        error.style.display = 'block'
    }
}
btn.addEventListener('click',() => {
    error.style.display = 'none'
    Bin2Dec()
})