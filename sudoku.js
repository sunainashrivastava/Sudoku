$(document).ready(function(){
  
  $("#btn").click(function(){
    $("table tr").each(function (){
      var rows = $(this).find("th");
      rows.eq(8).after(rows.eq(7)).after(rows.eq(6)).after(rows.eq(5)).after(rows.eq(4)).after(rows.eq(3)).after(rows.eq(2)).after(rows.eq(1)).after(rows.eq(0));
    });  
  });
 $(".number").on('click',function(){ 
  var a=null;
  var val;
  a= $(this).attr("value");
  a=parseInt(a);
  console.log("val");

  $(".change").on('click',function() { 
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
            var replaced_element=row.splice(index-1,1," ");  // replace the element with X
            console.log(replaced_element);   
            console.log(row);
            break;  
          }
          else
            continue;
        }
      }
    }  

    for(var k=0;k<9;k++)   // Comparision of columns
    {
      for(var i=0+k;i<k+72;i=i+9)  
      { 
        for(var j=9+i;j<k+72;j=j+9)
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
             console.log(row);
             var replaced_element=row.splice(index-1,1," "); // replace the element with X
             console.log(row);
             console.log(replaced_element);   
             break;; 
           }
           else
             continue;
          }
        }
      } 

    for(var k=0;k<81;k=(k+3))
    { 
      if((k%9==0)&&(k!=0))
        {k=k+27;
      }var count1=0;
      for(var i=(k+0);i<(k+21);i++)   // for 3*3 squares comparision
      {  
        if((i%3==0)&&(i!=0)&&(k%3!=0)&&(k!=0))
        {
          i=i+6; 
        }
        for(var j=(i+1);j<(k+21);j++)
        { 
          if((j%3==0)&&(j!=0))
          {
            j=j+6;
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
            var replaced_element=row.splice(index-1,1," "); // replace element with X
            console.log(replaced_element);   
            break;
          }
          else
            continue;
        }
      }
    }

});

});

});



