/*
    创建一个 3*3*3 i 行 
*/
let martix = []
for(let i=0;i<3;i++){
    martix[i] = []
    for(let j=0;j<3;j++){
        martix[i][j] = []
        for(let z=0;z<3;z++){
            martix[i][j][z] = i+j+z
        }
    }
}
console.log(martix)