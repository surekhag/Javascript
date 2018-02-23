function eraseCookie(name)
{
    writeCookie(name,"", -1);
}

function writeCookie(name, value, days){

    var expires="";
    if(days)
    {
        var date=new Date;
        date.setTime= date.getTime()+ (days*24*60*60*1000)
       expires= "; expires="+ date.toUTCString();
   }

   document.cookie= name + "=" + value + expires + "; path=/"
}


function readCookie(name)
{

    var searchname= name + "=";
    var cookies =document.cookie.split(';')

    for(var i=0; i< cookies.length; i++)
    {
   var c = cookies[i];
   
   while(c.charAt(0)==' ')
    {
        c=c.substring(1, c.length);
    if (c.indexOf("searchname")==0)
        {
return c.substring(searchname.length, c.length);
     }
    return null;
    
    }    
}
}