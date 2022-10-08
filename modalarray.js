
// // --- DOM EVEN ---
let openModal = document.querySelector(".open_modal")
let shutdown = document.querySelector(".modal_header i")
let modal = document.querySelector(".modal")

function toggleModal () {
    modal.classList.toggle("hidden")
}
openModal.addEventListener("click", toggleModal)

function toggleModal () {
    modal.classList.toggle("hidden")
}
shutdown.addEventListener("click", toggleModal)

// ---- IMPORT and EXPORT ------
function exportArr () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    
    document.getElementById("exportArr").innerHTML = `[ ${arr} ]`
}
// ---- Bai 1 -----

function getSum() {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    
    let sum = 0
    for ( i in arr ) {
        sum += parseInt(arr[i])
    }   
    document.getElementById("getSum").innerHTML = `Sum = ${sum}`
}

// --- Bai 2 ---

function getMax () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")

    let max = 0 
    for ( i in arr ) {
        if ( max < parseInt(arr[i])) {
        max = parseInt(arr[i])
        }
    }
    document.getElementById("getMax").innerHTML = `Max = ${max}`
}

// --- Bai 3 ---

function index_min () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")

    let min = arr[0]
    let index
    for ( i in arr ) {
        if ( min > parseInt(arr[i] )) {
            min = parseInt(arr[i])
        }
    }
    index = arr.indexOf(min.toString())
    document.getElementById("index_min").innerHTML = `Min = ${min} -- index = ${index}`
}

// ---- Bai 4 ----
function average () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    
    let sum = 0
    let count = 0
    let average = "Not"

    for ( i = 0 ; i < arr.length ; i += 2 ) {
        if ( parseInt(arr[i]) % 2 != 0 ) {
            count ++
            sum += parseInt(arr[i])
            average = sum / parseInt(count)
        }
    }
    document.getElementById("average").innerHTML = `Average = ${average}`
}
// ---- Bai 5 ----
function count () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")

    let n
    let count = 0

    for ( i in arr ) {
        n = Math.round(Math.sqrt(parseInt(arr[i])))
        if ( n * n == parseInt(arr[i])) {
            count ++
        }
    }
    document.getElementById("count").innerHTML = `${count} square number`
}

//  ----- Bai 6 -----

function check_replace () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    let count = 0

    for ( i = 0; i < arr.length; i++ ) {
        if ( arr[i] < 0 ) {
            count ++
            arr.splice(i, 1, "0")
        }
    }
    document.getElementById("check").innerHTML = ` ${count} element < 0 `
    document.getElementById("replace").innerHTML = `Replaced : [ ${arr} ]`
}

// --- Bai 7 ----
// function looK () {
//     let str = document.getElementById("input").value
//     let K = document.getElementById("K").value
//     let arr = str.split(" ")
//     let count = 0
//     for ( i in arr ) {
//         if ( parseInt(arr[i]) == parseInt(K)) {
//             arr.splice(i,1)
//             count++
//             document.getElementById("looK").innerHTML = `removed ${K} - new array: [ ${arr} ]`
//         } 
//         if (count == 0) {
//             document.getElementById("looK").innerHTML = `Not look up ${K}`
//         }
//     }
// }
// --- new Bai 7 ----
function looK () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    let K = document.getElementById("K").value
    let count = 0
    for ( i in arr ) {

        if (parseInt(arr[i]) == parseInt(K)) {
            count ++
            let remove = arr[i]
            newArr = arr.filter(item => item !== remove)
            document.getElementById("looK").innerHTML = newArr
        }

        if (count == 0 ) {
            document.getElementById("looK").innerHTML = `Not look up ${K}`
        }
    }
}
// --- Bai 8 -----

function reverse () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")
    let reverseArr = str.split(" ").sort(function () {
        return -1
    })
    document.getElementById("original").innerHTML = `Original : [ ${arr} ]`
    
    document.getElementById("reverse").innerHTML = `Reverse : [ ${reverseArr} ]`
}

// ----- Bai 9 ----

function decreaseOrder () {
    let str = document.getElementById("input").value
    let arr = str.split(" ")

    let arr2 = arr.sort(function(a,b) {
        return b - a
    })

    document.getElementById("decreaseOrder").innerHTML = `decreasing order :[ ${arr2} ]`
}
