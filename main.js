var images = ["Ayaan.png", "Aysha.png", "Sarfraz.png", "Pramod.png", "Sheela.png"]
var names = ["Ayaan", "Aysha", "Sarfraz", "Pramod", "Sheela"];
var i = 0;
function update()
{

     if(i == 5) {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    //Debug the code to store list of names in updatedName. Use names[i]
 
 
    document.getElementById("family_member_image").src = images [i];
    document.getElementById("family_member_name").innerHTML = names [i] ;
i++;
  }
