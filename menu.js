    var $ = function(id) {
      return document.getElementById(id);
    }
    var afficheTemps = function() {
      var date = new Date();
      var annee = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      $("annee").innerHTML = annee;
      $("month").innerHTML = month;
      $("day").innerHTML = day;
      $("hour").innerHTML = hour;
      $("minutes").innerHTML = minutes;
    }