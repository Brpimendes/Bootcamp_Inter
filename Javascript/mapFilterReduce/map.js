const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

const num = [1, 2]

console.log('this -> maça: ', mapComThis(num, maca))
console.log('this -> laranja: ', mapComThis(num, laranja))


function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

console.log('FUnção Map sem o This: ', mapSemThis(num))