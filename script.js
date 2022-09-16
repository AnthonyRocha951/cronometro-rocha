var sec=0
var mim=0
var hr=0
var interval

function DoisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function iniciar(){
    relogio()
    interval=setInterval(relogio,1000)
}

function pausar(){
    clearInterval(interval)
}

function parar(){
    clearInterval(interval)
    sec=0
    mim=0
    document.getElementById('relogio').innerText='00:00:00'
}

function relogio(){
    sec++
    if(sec==60){
        mim++
        sec=0
        if(mim==60){
            mim=0
            hr++
        }
    }
    document.getElementById('relogio').innerText=DoisDigitos(hr)+':'+DoisDigitos(mim)+':'+DoisDigitos(sec)
}