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
    
    $('td').each(function() 
    {
      val=$(this).text();  
      row.push(val);
    });
});
});
});