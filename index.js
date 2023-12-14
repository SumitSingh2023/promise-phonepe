let button=document.getElementById('btn')
let image=document.getElementById('image')
let output=document.querySelector('.output')
let homebtn=document.getElementById('bttn')

function checkContent(){
    if(randomSeconds>5 ){
        return true
    }else{
        return false
    }
    
}


let randomSeconds = Math.floor(Math.random() * 10) + 1;
console.log(randomSeconds)
let paymentSuccess=checkContent()
function process(){
    image.src='https://th.bing.com/th?id=OIP.BNSkUHw4xk4o2i7KTzfp6AAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2'
    image.style.height="20vh"
    image.style.objectFit="cover"
    image.style.alignItems='center'
    image.style.marginLeft='70px'
    image.style.marginTop='0px'
}
image.src='https://th.bing.com/th?id=OIP.fjd4EV7z9o-Oqc8o1VZeTgHaIg&w=233&h=267&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2'


button.addEventListener("click",function(){
    let payment=new Promise(function(res,rej){
        setTimeout(()=>{
            output.style.visibility="visible"
            if(paymentSuccess==true){
                res('resolved')
            }else{
                rej('rejected')
            }
    
        },2000)

    })
   
    payment.then(()=>{
        image.src='https://th.bing.com/th/id/OIP.btfWiHr1sg7dIbxF_ShZwQAAAA?w=141&h=282&c=7&r=0&o=5&dpr=1.6&pid=1.7'
        image.style.height="40vh"
        image.style.objectFit="cover"
        image.style.alignItems='center'
        image.style.marginLeft='70px'
    }).catch(()=>{
        image.src='https://user-images.githubusercontent.com/6893693/113376403-47d9e200-938f-11eb-8a7a-e45a0dd4a37a.jpeg'
        image.style.height="40vh"
        image.style.objectFit="fit"
        image.style.alignItems='center'
        image.style.marginLeft='70px'
        
    })
   
     process()

})

homebtn.addEventListener("click",function(){
    location.reload()

})