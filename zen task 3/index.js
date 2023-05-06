 object1 ={name:"person1",age:"5"}
 object2 ={age:"5",name:"person1"}

let flag= true
 for(let e in object1)
 {
    if(object1[e]!==object2[e])
    {
        flag= false;
        break
    }
 }
 flag?console.log("equal"):console.log(" not equal")

 