// 


let year = 2004;
if(year % 4 == 0)
{
    if(year % 400 != 0 || year % 100 == 0)
    {
        console.log("Leap year")
    }
    else{
        console.log("Non Leap Year");
    }
}