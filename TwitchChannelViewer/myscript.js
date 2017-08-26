

$(document).ready(function(){
  //this is the API key -- known as the USERID key in twitch
  var key = "l41u4yxpbq18z1sutqd9k4ct7oai0m";
  
  //For freecodecamp channel
  var freecodecampstatus= "https://api.twitch.tv/kraken/streams/freecodecamp?client_id=" + key;
  var freecodecampbio = "https://api.twitch.tv/kraken/users/freecodecamp?client_id=" + key;
  
  //For starcraft 2 channel
  var eslcs2status = "https://api.twitch.tv/kraken/streams/ESL_SC2?client_id=" + key;
  var eslcs2bio = "https://api.twitch.tv/kraken/users/ESL_SC2?client_id=" + key;
  
  //For robotcaleb's channel
  var robotcalebstatus = "https://api.twitch.tv/kraken/streams/RobotCaleb?client_id=" + key;
  var robotcalebbio = "https://api.twitch.tv/kraken/users/RobotCaleb?client_id=" + key;
  
  //An array for each type of stream URL's
  
  var streamstatusurls = [freecodecampstatus, eslcs2status, robotcalebstatus];
  var streambiourls = [freecodecampbio, eslcs2bio, robotcalebbio];
  
  //calling and retrieving status of stream
  for(var i=0; i<3; i++){
    (function (i){
      $.ajax({
      url: streamstatusurls[i],
      type: "GET",
      dataType: "json",
      success: function(data){
      console.log(data.stream);
      console.log(i);
      if(data.stream != null){

        $("#ch"+i+"-status").html("Online");
        
      }
    }
  })
    })(i);
  
}
  
  
  
  
})
