jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/
jQuery(document).ready(function(){// Remove empty P tags created by WP inside of Accordion and Orbit
jQuery('.accordion p:empty, .orbit p:empty').remove();// Adds Flex Video to YouTube and Vimeo Embeds
jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function(){if(jQuery(this).innerWidth()/jQuery(this).innerHeight()>1.5){jQuery(this).wrap("<div class='widescreen responsive-embed'/>");}else{jQuery(this).wrap("<div class='responsive-embed'/>");}});});

/*
Insert Custom JS Below
*/
jQuery('[data-orbit]').on('slidechange.zf.orbit', function() {
   jQuery('.orbit-slide').addClass('fade-in');
});

$('[data-orbit]').on('beforeslidechange.zf.orbit', function() {
    jQuery('.orbit-slide').removeClass('fade-in');
});

jQuery(window).load(function(){
  jQuery("#hero-slider").orbit();
  jQuery("#graniflex-slider").orbit();
  jQuery("#overlay-slider").orbit();
});