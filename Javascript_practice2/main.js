// Bài 1
function getRandomMark(start, end, step) {
    let listNumber = [];
    const randomNumber = Math.floor(Math.random() * (end - start)) + start;
    for(let i = randomNumber; i <= end; i = i+step)
    {
        listNumber.push(i);
    }
    if(listNumber.length > 4) {
        return listNumber;
    }
    else {
        return getRandomMark(start, end, step);
    }
}

// Bài 2
function generateStudentMark(name) {
    const marks = getRandomMark(1,10,1);
    return {
        name: name,
        marks: {
            literature: marks[Math.floor(Math.random()*5)],
            maths: marks[Math.floor(Math.random()*5)],
            chemistry: marks[Math.floor(Math.random()*5)],
            history: marks[Math.floor(Math.random()*5)],
            biology: marks[Math.floor(Math.random()*5)],
        }
    }
}

// Bài 3
function getMarkList() {
    let markList = [];
    const nameList = ["FEIntern", "Duong", "Hai", "Tung", "Lan", "Thang", "Tien" ,"Ha", "Long", "Son"];
    for(i = 0; i < Math.floor(Math.random() * 6) + 5; i++) {
        markList.push(generateStudentMark(nameList[i]));
    }
    return markList;
}

// Bài 4
function calculateAvg(arr) {
    if(Array.isArray(arr))
    {
        let Avg = [];
        const markList = arr.map(item => {
            return item;
        });
        for(i = 0; i < markList.length; i++) {
            const mark = markList[i].marks;
            let count = 0;
            let average = 0;
            let sum = 0;
            for (key in mark) {
                count++;
                if(key == 'literature')
                {
                    count++;
                    mark[key] = mark[key]*2;
                }
                if(key == 'maths')
                {
                    count++;
                    mark[key]= mark[key]*2;
                }
                sum += mark[key];
            }
            average = sum / count;
            Avg.push({
                name: markList[i].name,
                average: average.toFixed(2)
            });
        }
        return Avg;
    }
}

// Bài 5
function findAvg8(arr) {
    if(Array.isArray(arr))
    {
        const Avg = arr.filter(e => e.average >= 8);
        return Avg;
    }
}

function findMinMax(arr) {
    if(Array.isArray(arr))
    {
        const minList = [];
        const maxList = [];
        const markSubject = [];

        const markList = arr.map(item => {
            return item.marks;
        });

        const subjectList = Object.keys(markList[0]);

        for(let i = 0; i < subjectList.length; i++) {
            const mark = markList.map(item => {
                return item[subjectList[i]];
            });
            markSubject.push(mark);
        }
        
        const minMark = markSubject.map(item => {
            return Math.min(...item);
        })

        const maxMark = markSubject.map(item => {
            return Math.max(...item);
        })

        

        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < subjectList.length; j++) {
                if(arr[i].marks[subjectList[j]] === minMark[j])
                {
                    minList.push({name: arr[i].name, subject: subjectList[j], score: minMark[j]});
                }
                if(arr[i].marks[subjectList[j]] === maxMark[j])
                {
                    maxList.push({name: arr[i].name, subject: subjectList[j], score: maxMark[j]});
                }
            }
        }
        return {min:minList, max:maxList};
    }
}

// Bài 6
function bonus(arr) {
    if(Array.isArray(arr))
    {
        const markList = arr.map(item => {
            return item.marks;
        });


        const subjectList = Object.keys(markList[0]);

        const bonusList = [];
        const money = [];

        for(let i = 0; i < markList.length; i++) {
            let moneySub = 0;
            for(let j = 0; j < subjectList.length; j++) {
                
                let count8 = 0;
                let count9 = 0;
                let count10 = 0;

                if (markList[i][subjectList[j]] === 8)
                {
                    count8++
                }
                if (markList[i][subjectList[j]] === 9)
                {
                    count9++
                }
                if (markList[i][subjectList[j]] === 10)
                {
                    count10++
                }

                moneySub += count8*1000000 + count9*2000000 + count10*5000000
            }
            money.push(moneySub);
        }

        for(let i = 0; i < arr.length; i++) {
            bonusList.push(
                {
                    name: arr[i].name,
                    bonus: money[i],
                }
            );
        }
        return bonusList;
    }
}

// Done

const bai1 = getRandomMark(1, 10, 1);
const bai2 = generateStudentMark('FEIntern');
const bai3 = getMarkList();
const bai4 = calculateAvg(getMarkList());
const bai5a = findAvg8(calculateAvg(getMarkList()));
const bai5b = findMinMax(getMarkList());
const bai6 = bonus(getMarkList());

// Review console
console.log(bai1)
console.log(bai2);
console.log(bai3);
console.log(bai4);
console.log(bai5a);
console.log(bai5b);
console.log(bai6);