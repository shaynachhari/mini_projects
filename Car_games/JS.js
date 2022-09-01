// setinterval(run, 100);
// m=0;

// function run()
// {
//     m+=5;
//     var x = document.getElementById('img');
//     x.style.marginLeft=m+'px';
// }


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
            document.getElementById('img').style.visibility='visible';
            var target=document.getElementById('img');
            target.style.marginLeft=m+'px';
        }
   }

}

function stop()
{
    clearInterval(x)
}