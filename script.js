// let p=fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=>{ 
    
//     console.log(response.status)//this tells us that isn we are able to fetch the api or not 200-299 means it is good 
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()

// }).then ((value2)=>{
//     console.log(value2)
// })
const createtodo=async(todo)=>{
let options={
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify(todo),
    }
    let p=await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response=await p.json()
    return response
}
const gettodo=async (id)=>{
    let p=await fetch('https://jsonplaceholder.typicode.com/posts/1'+id)
  let r= await p.json()
   return r
}
const mainfunc=async()=>{
    let todo={
        title:"Harsh",
        body:"Chauhan",
        userId:110
    }
    let todor=createtodo(todo)
    console.log(todor)
    console.log(await gettodo(10))
}
mainfunc()