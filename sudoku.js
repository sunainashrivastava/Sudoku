$(document).ready(function()
{

 $(".number").on('click',function()
 { 
  var a;
  var val;
  a= $(this).attr("value");
  a=parseInt(a);
  console.log("val");

  $(".change").on('click',function()
  { 
    k=0;  
    var row=[];
    $(this).text(a);
    
    $('th').each(function() 
    {
      val=$(this).text();  
      row.push(val);
    });

    for(var k=0;k<81;k=k+9)  // Comparision of rows
    {
     for(var i=0+k;i<9+k;i++)
     {
      for(var j=1+i;j<9+k;j++)
      {
        if(row[i]=="")
          continue;
        else if(row[j]=="")
          continue;
        else if(row[i]==row[j])
        { 
          $(this).text("X"); 
          var index= $(this).attr('id'); 
          console.log(index);
          var replaced_element=row.splice(index-1,1,'X');
          console.log(replaced_element);   
          break;  
        }
        else
          continue;
      }
    }
  }  

      for(var k=0;k<9;k++)   // Comparision of columns
      {
        for(var i=0;i<9;i++)  
        { 
          for(var j=0+i;j<72+i;j=j+9)
          {
            if(row[j]=="")
             continue;
           else if(row[j+9]=="")
             continue;
           else if(row[j]==row[j+9])
           {
             $(this).text("X"); 
             var index= $(this).attr('id'); 
             console.log(index);
             console.log(row);
             var replaced_element=row.splice(index-1,1,'X');
             console.log(row);
             console.log(replaced_element);   
             break;  
           }
           else
             continue;
         }
       }
     } 

     for(var k=0;k<81;k=(k+3) )
     { 
      if((k%9==0)&&(k!=0))
       {k=k+27;
       }var count1=0;
     for(var i=(k+0);i<(k+21);i++)   // for 3*3 squares comparision
       {  if((i%3==0)&&(i!=0)&&(k%3!=0)&&(k!=0))
         {i=i+6; 
         }
         var count2=0;
         for(var j=(i+1);j<(k+21);j++)
         { 

          if(count2==9)
            { break;}
          count2++;   
          if((j%3==0)&&(j!=0))
           {j=j+6;
           }
           if(row[i]=="")
             continue;
           else if(row[j]=="")
             continue;
           else if(row[i]==row[j]==a)
           { 
            $(this).text("X"); 
            var index= $(this).attr('id'); 
            console.log(index);
            var replaced_element=row.splice(index-1,1,'X');
            console.log(replaced_element);   
            break;  
          }
          else
            continue;

        } count1++;
        if(count1==9)
          {break;}
      }
    }

// function squareNo(sq) {
//   console.log(sq.className.split(' ')[3].substr(2));
//  return parseInt(sq.className.split(' ')[3].substr(2));
// }

});

});

});



