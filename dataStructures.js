// level {3}
// -----------------------1----------------------
function convetUpperCase(s){
    let temp = s.toUpperCase()
    return temp
}



function convertObjectValueUppercase(obj){
    if(typeof(obj)=='string'){
        obj = convetUpperCase(obj)
        return obj
    }
    let keys = Object.keys(obj)
     for(let key of keys)
     {
            
        obj[key] = convertObjectValueUppercase(obj[key])
        //console.log(obj[key])
     }
    return obj
}
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}
convertObjectValueUppercase(user)
console.log(user)

// -------------------------2----------------------

function pairSum(s){
    let n = s.length;
    let pairs = s.split(',');
    console.log(pair)
    let resMap = new Map()
    for(let pair of pairs)
    {
        let curr = pair.split(':')
        if(resMap.has(curr[0]))
        {
           let sum = resMap.get(curr[0])+Number(curr[1])
           resMap.set(curr[0],sum)
        }else{
            resMap.set(curr[0],Number(curr[1]))
        }
    }
    return resMap
}

let pair = "a:2,b:3,c:4,a:5,b:6"
console.log(pairSum(pair))


// -------------------------------------------3---------------------------

function checkValid(s)
{
    let stack = []
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='('||s[i]=='{'||s[i]=='[')
        {
            stack.push(s[i])
        }else{
            if(stack.length === 0)
            {
                return false
            }
            if(s[i]==')'&&stack[stack.length-1]=='(')
            {
                stack.pop()
            }else if(s[i]=='}'&&stack[stack.length-1]=='{')
            {
                stack.pop()
            }else if(s[i]==']'&&stack[stack.length-1]=='['){
                stack.pop()
            }else{
                return false
            }
        }
    }
    if(stack.length){
        return false
    }else{
        return true
    }
}
let s = "{[(]}"
console.log(checkValid(s))