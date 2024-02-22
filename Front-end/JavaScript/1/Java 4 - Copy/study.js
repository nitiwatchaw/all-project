
let passCount = 0
let score = [76 ,78, 45,13,23]

// for(let i = 0 ; i < score.length ; i++){
//         if(score[i] >= 50){
//             passCount++
//         }
// }

score.forEach((e) => {
    if(e >= 50){
        passCount++
    }
});

console.log("pass score count is", passCount)





