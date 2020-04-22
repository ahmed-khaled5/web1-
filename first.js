var a = prompt ("enter number");
var b = prompt ("enter number");
var c = prompt ("enter number");

var mymax = function(a,b,c)
{
    if (a>=b && b>=c)
    {
        return a;
    }

   else if (b>=a && b>=c)
    {
        return b;
    }


    else 
    {
        return c;
    }

}

var max = mymax(a,b,c);
console.log(max);