import { createIcons, icons } from 'lucide';
import Glide from '@glidejs/glide'

document.addEventListener("DOMContentLoaded", function(){
  var glide = new Glide('#slider', {
    type : 'carousel',
    partView : 1,
    focusAt : 'center',
    breakpoints : {
      800 : {
        perView : 1
      },
      480 : {
        perView : 1
      }
    },
    autoplay: 5000
  });

  glide.mount();

 

});

function startTimer() {
    setInterval(function() {
      forward('slideforward');
    }, 5000)
}

// Caution, this will import all the icons and bundle them.
createIcons({ icons });

// Recommended way, to include only the icons you need.
import { createIcons, Menu, ArrowRight, Globe } from 'lucide';

createIcons({
  icons: {
    GitHub,
    AtSign,
    MailPlus,
    Map,
    Smartphone,
    Clock,
    ShoppingCart,
    Heart,
    Menu,
    ArrowRight,
    Globe
  }
});

// products for ecom
