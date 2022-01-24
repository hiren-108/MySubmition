// level {3}
function fun(obj){
    let liked = obj.liked
    let disliked = obj.disliked
    let loved = obj.loved
    liked.map( r => (r.reaction ='Liked'))
    disliked.map( r => (r.reaction = 'disliked'))
    loved.map( r => (r.reaction = 'loved'))

    let res = [...liked,...disliked,...loved]
    
    return res
}

let obj = {
    liked: [
      { id: 1, name: "John Doe", age: 20 },
      { id: 2, name: "Jane Doe", age: 30 },
      { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
      { id: 4, name: "Jason Doe", age: 20 },
      { id: 5, name: "Josh Doe", age: 30 },
      { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
      { id: 7, name: "Jasmine Doe", age: 20 },
      { id: 8, name: "Bob Doe", age: 30 },
      { id: 9, name: "Tom Smith", age: 40 }
    ]
}
let p = fun(obj)
console.log(p)