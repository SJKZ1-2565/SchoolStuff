function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    var textData = 'This is data in index '
    for (i = 0;i < 6; i++){
      console.log(i)
      var number = i+1;
      document.getElementById('std' + i).innerText = textData + number
    
    }
    // document.getElementById('std0').innerText = textData
    // document.getElementById('std1').innerText = textData
    // document.getElementById('std2').innerText = textData
    // document.getElementById('std3').innerText = textData
    // document.getElementById('std4').innerText = textData
    // document.getElementById('std5').innerText = textData


  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();