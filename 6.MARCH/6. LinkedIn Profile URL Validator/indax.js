// Url validation formate.

let valid=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/


// url list 
let urlList=[
    "https://www.linkedin.com/checkpoint/lg/login-submit?_l=en_US",
    "https://www.linkedin.com/checkpoint/lg/login-submit?",
    "https://regexrcom/2rj36",


]

function fun(url){
    if(valid.test(url)){
        return "This url is valid."
    }
    else{
        return "This url is Invalid."
    }
}

urlList.forEach(url=>{
    let result=fun(url);
    console.log(` the results:- ${result}`)
})