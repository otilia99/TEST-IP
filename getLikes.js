function getLikesCount () {
  var xhttp
  var postID = '112510383726603_128873248756983'
  var url = 'https://web-rfnl5hmkocvsi.azurewebsites.net/FBFINAL/REST.php?do=getLikeCount&postId=' + postID + '&fbid=' + sessionStorage.getItem('id_user')
  //console.log(url)

  var displayed = 0
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest()
  } else {
    xhttp = new ActiveXObject('Microsoft.XMLHTTP')
  };
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.response)
      location.assign('stats-page.html')
     
      var obj = JSON.parse(this.responseText)
      message = ''
      for (var i = 0; i < obj.LIKES.length; i++) {
        var result = obj.LIKES[i]
        message = message + 'Numarul de like-uri este: ' + result[0]
        console.log(result);
      }
      console.log(message);
      alert(message);
    } else
    if (this.status == 404) {
      if (displayed == 0) {
        alert('No information found')
        location.reload()
        displayed++
      }
    }
  }
  xhttp.open('GET', url, true)
  console.log(url)
  //xhttp.send(null)
}
