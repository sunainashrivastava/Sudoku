$(document).ready(function(){
  
  $("#btn").click(function(){
    $("table tr").each(function (){ // shuffling of rows.
      var order=Math.ceil(Math.random() *2);
      var sudoku = $(this).find("th");
      if(order==1)
      {
       sudoku.eq(6).after(sudoku.eq(1)).after(sudoku.eq(2)).after(sudoku.eq(3)).after(sudoku.eq(4)).after(sudoku.eq(5)).after(sudoku.eq(0)).after(sudoku.eq(7)).after(sudoku.eq(8));
      }
      else
      {
       sudoku.eq(0).after(sudoku.eq(1)).after(sudoku.eq(2)).after(sudoku.eq(6)).after(sudoku.eq(4)).after(sudoku.eq(5)).after(sudoku.eq(3)).after(sudoku.eq(7)).after(sudoku.eq(8));
      }
    });  
  });
  $(".number").on('click',function(){ 
    var a=null;
    var val;
    a= $(this).attr("value");
    a=parseInt(a);
    $(".change").on('click',function() { // entering a number in empty box.
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
        for(var i=k;i<9+k;i++)
        {
          for(var j=1+i;j<9+k;j++)
          {
            if(((row[i]=="")&&(row[j]==""))||((row[i]=="X")&&(row[j]=="X")))
              continue;
            else if(row[i]==row[j])
            { 
              $(this).text("X"); 
              var index= $(this).attr('id'); 
              console.log(index);
              var replaced_element=row.splice(index-1,1,"X");  // replace the element with X
              console.log(replaced_element);   
              console.log(row);
              break;  
            }
            else
              continue;
          }
        }
      }  
      loop1: 
      for(var k=0;k<9;k=k+1)   // Comparision of columns
      {
        loop2:
        for(var i=k;i<k+73;i=i+9)  
        { 
          loop3:
          for(var j=9+i;j<73+k;j=j+9)
          {
            if(((row[i]=="")&&(row[j]==""))||((row[i]=="X")&&(row[j]=="X")))
             continue;
            else if(row[i]==row[j])
             {
              $(this).text("X"); 
              var index= $(this).attr('id'); 
              var replaced_element=row.splice(index-1,1,"X"); // replace the element with space
              break loop1;
             }
            else
              continue;
            }
          }
        } 

      for(var k=0;k<81;k=(k+3))
      { var m=0;
        if((k%9==0)&&(k!=0))
        {
          k=k+18;
        }
        for(var i=k;(i<(k+21)&&(i<81));i++)   // for 3*3 squares comparision
        {  
          if(((i%3==0)&&(i!=0)))
          {
            i=i+6; 
          }
          if((k%3==0)&&(k!=0)&&(i!=0)&&(i%3==0)&&(m==0))
          { 
            i=i-6;
          }
          for(var j=(i+1);((j<(k+21))&&(j<81));j++)
          { 
            if((j%3==0)&&(j!=0))
            {
              j=j+6;
            }
            if(((row[i]=="")&&(row[j]==""))||((row[i]=="X")&&(row[j]=="X")))
             continue;
            else if(row[i]==row[j])
            { 
              $(this).text("X"); 
              var index= $(this).attr('id'); 
              var replaced_element=row.splice(index-1,1,"X"); // replace the element with space
              break;
            }
            else
              continue;
          }
          m++;
        }
      }
    });
  });
});



