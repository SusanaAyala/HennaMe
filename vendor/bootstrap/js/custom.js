
$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-50px',
                'transition': '0.50s ease-out',
                'opacity': '0'
                
            });
            
            
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
               'transition': '0.50s ease-out',
                'opacity': '1'
                
            });
            
           
           
            
          
            
            
        }
       
        
    });
    
    
});


