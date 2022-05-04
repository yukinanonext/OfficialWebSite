'use strict';

{
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); 
    var pos = $(elmHash).offset().top;	
    $('body,html').animate({scrollTop: pos}, 1000); 
    return false;
  });


  const abstracttarget = document.getElementById('abstract-text');
  const characterimgtarget1 = document.getElementById('charaimg1');
  const charactertexttarget1 = document.getElementById('charatext1');
  const characterimgtarget2 = document.getElementById('charaimg2');
  const charactertexttarget2 = document.getElementById('charatext2');



  function callback(entries, obs){
    if(!entries[0].isIntersecting){
      return;
    }

    entries[0].target.classList.add('appear');

    obs.unobserve(entries[0].target);
  }

  const options = {
    threshold: 1
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(abstracttarget);
  observer.observe(characterimgtarget1);
  observer.observe(charactertexttarget1);
  observer.observe(characterimgtarget2);
  observer.observe(charactertexttarget2);

}