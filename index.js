// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog!')

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork('work from home.')

function wrapAdjective(){
    
}

let Calculator = {
    add(x, y){
        return x + y
    },
    subtract(x, y){
        return x - y
    },
    multiply(x, y){
        return x * y
    },
    divide(x, y){
        return x / y
    }
}
Calculator.add(1,3)
Calculator.subtract(1,3)
Calculator.multiply(1,3)
Calculator.divide(10,5)

function actionApplyer(num, array) {
    return array[num]
}