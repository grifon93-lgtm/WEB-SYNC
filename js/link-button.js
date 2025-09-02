$(document).ready(function(){
   const $windowWidth = $(window).width();
   const $linkButton = $('.link-button-box .link-button ');
   const $linkButtonLight = $('.link-button-box .link-button-light ');
   const IS_ACTIVE = 'is-active';

   if ($windowWidth > 780) {
      $linkButton.on('mouseenter',function() {
         $(this).toggleClass(IS_ACTIVE); 
      });
      $linkButton.on('mouseleave',function() {
         $(this).toggleClass(IS_ACTIVE); 
      });

      $linkButtonLight.on('mouseenter',function() {
         $(this).toggleClass(IS_ACTIVE); 
      });
      $linkButtonLight.on('mouseleave',function() {
         $(this).toggleClass(IS_ACTIVE); 
      });
   } else {
      $linkButton.addClass(IS_ACTIVE);
      $linkButtonLight.addClass(IS_ACTIVE);
   }

});