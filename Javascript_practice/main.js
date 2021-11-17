// Bài 1
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = 1;
const b = 100;
const bai1 = "Kết quả random từ " + a + " tới " + b + " là: " + randomNumber(a, b); //Trả về một số ngẫu nhiên từ a đến b

document.getElementById("bai1").innerHTML = bai1;
console.log(bai1);

// Bài 2
const arr2 = [...Array(10)].map(e=>(randomNumber(a, b)));

const bai2 = "Mảng init gồm 10 phẩn tử ngẫu nhiên lấy từ hàm random là: [" + arr2 + "]";
document.getElementById("bai2").innerHTML = bai2;
console.log(bai2);

// Bài 3
const arr3 = [1, 2, 3, 4, 5];

function getOddNumbers(array) {
    return array.filter(e => e % 2 != 0);
}

const bai3 = "Kết quả getOddNumbers là: [" + getOddNumbers(arr3) + "]";
document.getElementById("bai3").innerHTML = bai3;
console.log(bai3);

// Bài 4
const arr4 = [1, 2, 3, 4, 5];
document.getElementById("arr4").innerHTML = "Mảng ban đầu: [" + arr4 + "]";

function doubleItem(array) {
    return array.map(e => e * 2);
}

const bai4 = "Kết quả sau khi double là: [" + doubleItem(arr4) + "]";
document.getElementById("bai4").innerHTML = bai4;
console.log(bai4);

// Bài 5
const arr5 = [1, 3, 4, 5, 1, 3, 1];

function reduceCheck(array) {
    return array.reduce(function (num, val) {
        num[val] ? num[val]++ : num[val] = 1;
        return num;
    }, {})
}

const bai5 = reduceCheck(arr5);
document.getElementById("bai5").innerHTML = bai5;
console.log(bai5);