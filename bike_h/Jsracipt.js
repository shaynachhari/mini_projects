

var x;
var m=0;
function start()
{
 x=setInterval(anim,100);
 
  function anim()
  {
      
      console.log(m);
        if(m==1200)
        {
            clearInterval(x);           
            m=0;
        }
        
        else
        {
            m=m+5;
            document.getElementById('img1').style.visibility='visible';
            var target=document.getElementById('img1');
            target.style.marginLeft=m+'px';
        }
   }


// message dekho
// creat
var y;
var n=0;


y=setInterval(run,80);
 
  function run()
  {
      
      console.log(n);
        if(n==1200)

        {
            
            clearInterval(y);           
            n=0;
            
        }
        
        else
        {
            n=n+5;
            document.getElementById('img2').style.visibility='visible';
            var target=document.getElementById('img2');
            target.style.marginRight=n+'px';
        }
   }

}

function stop()
{
    clearInterval(x )
    clearInterval(y)
}