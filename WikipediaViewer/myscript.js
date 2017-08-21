


$(document).ready(function(){

  $("#mybutton").click(function(){
  var namelist = [];
  var descriptionlist = [];
  var urllist = [];
  var myNode = document.getElementById("results");
  myNode.innerHTML = '';
  var searchterm = $("#searchbox").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchterm + "&callback=?";
    
    $.ajax({
      url: url,
      type: "GET",
      Async: "false",
      dataType: "json",
      error: function(){
        alert("failed to retrive API");
      },
      success: function(data){
        
        console.log(data);
        var length = data[1].length;
        
        for(var i=0; i<length; i++){
          namelist.push(data[1][i]);
          descriptionlist.push(data[2][i]);
          urllist.push(data[3][i]);
        }
        
        $("#resultstext").html(descriptionlist[1]);
        
        
        for(var i=0; i<length; i++){
          
          var p = document.createElement("P");
         
          var att = document.createElement("a");
          var linkText = document.createTextNode(namelist[i]);
          att.appendChild(linkText);
          att.href = urllist[i];
          var a = document.createElement('P');
          a.innerHTML = "<p>" + descriptionlist[i] + "</p>";
          p.appendChild(att);
          p.appendChild(a);
          document.getElementById("results").appendChild(p);
          
          
        }
        
      }
      
      
           
    })
  
  
  })
 
});
