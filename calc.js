function disp(value){
    if(document.getElementById("result").value=="0")
    {
        document.getElementById("result").value =value;
    }
    else{
        document.getElementById("result").value += value;
    }
    
}

function clearscreen(){
    document.getElementById("result").value = "";
}

function result(){
    var r=document.getElementById("result").value;
    var res=eval(r);
    document.getElementById("result").value=res;
}

function backspace(){
    var s=document.getElementById("result").value;
    var ms=s.substring(0,s.length-1);
    document.getElementById("result").value=ms;
}

function allclear()
{
    document.getElementById("result").value="0";
}