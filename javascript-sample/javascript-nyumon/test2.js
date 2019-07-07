
function hyouji()
{
    alert("Hello");
}

var e = document.getElementsByClassName('hoge');
e[0].addEventListener("click",hyouji,false);

function keisan1()
{
    var result = keisan2(20,40);
    document.write(result);
}

function keisan2(x,y)
{
    var result = x + y;
    return result;

}
