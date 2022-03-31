var cookieinfo;
function CookieExist(CookieName) { cookieinfo = document.cookie; if (cookieinfo.indexOf(CookieName) == -1) { return false; } else { return true; } }
function SetCookie(CookieName,CookieArgs,CookieExpire) { document.cookie = CookieName + "=" + CookieArgs + ";" + "max-age=180" + CookieExpire; }
function GetCookie(CookieName) { if ( CookieExist(CookieName) ){ d = cookieinfo.indexOf(CookieName) + CookieName.length + 1; f = cookieinfo.indexOf(";",d); if ( f == -1) { f = cookieinfo.length; } return (cookieinfo.substring(d,f)); } else { return ("0"); } } 


var pup=0;
function popup ()
{
if(pup===0)
{
pup=1;
if(GetCookie("dj")==1)
{
return;
}
else
{
SetCookie("dj",1,"");
var popun=String
popun[0]="http://gfivyrc.s602.xrea.com";
popun[1]="http://redp.s1009.xrea.com";
popun[2]="http://faketaxi.s602.xrea.com/?random=1";    
popun[3]="http://dymusz.s1007.xrea.com/?r=1";
popun[4]="http://tnayr.s1007.xrea.com/";
popun[5]="http://lrmusz.s1007.xrea.com/";
resultat = Math.floor(Math.random() * 6);
window.open(popun[resultat], "","toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,menuBar=1,width=30000,height=30000");
window.focus();
popup.blur();
}
}
}
document.onclick=popup;
