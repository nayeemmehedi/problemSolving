let vaxTrail = (arr)=>{

  let a=[]
 let b=[]
 let c=[]
 let d=[]



arr.map(v=>{

  if(v.age<= 30 &&  v.age >=20 && v.temperature <100){
    a.push(v)

  }else if(v.age<=40 &&  v.age>=31  && v.temperature <100 ){
    b.push(v)
  }else if(v.age<=50 &&  v.age>=41  && v.temperature <100 ){
    c.push(v)
  }else if( v.temperature >100 ){
    d.push(v)
  }else{

  }


   })

let test = {
  a,
  b,
  c,
  d
  

}
return test
//console.log(test)

}

console.log(vaxTrail ([{
  name:"sunil",age:21,temperature:98
},{
  name:"sakil",age:45,temperature:118
},{
   name:"biplop",age:22,temperature:98
},{
  name:"sakil",age:45,temperature:98
},{
   name:"bipu",age:22,temperature:101
},{
   name:"shawon",age:33,temperature:71
}])) 