"use strict";

{
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr("href");
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, 1000);
    return false;
  });

  $(function () {
    const hum = $("#header-menu, .close");
    const nav = $(".sp-header-link");
    hum.on("click", function () {
      nav.toggleClass("toggle");
    });
  });

  const abstracttarget = document.getElementById("abstract-text");
  const gamestarget = document.getElementById("games-wrap");
  const characterimgtarget1 = document.getElementById("charaimg1");
  const charactertexttarget1 = document.getElementById("charatext1");
  const characterimgtarget2 = document.getElementById("charaimg2");
  const charactertexttarget2 = document.getElementById("charatext2");

  function callback(entries, obs) {
    if (!entries[0].isIntersecting) {
      return;
    }

    entries[0].target.classList.add("appear");

    obs.unobserve(entries[0].target);
  }

  const options = {
    threshold: 1,
  };

  const options2 = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(callback, options);
  const observer2 = new IntersectionObserver(callback, options2);

  observer.observe(abstracttarget);
  observer2.observe(gamestarget);
  observer.observe(characterimgtarget1);
  observer.observe(charactertexttarget1);
  observer.observe(characterimgtarget2);
  observer.observe(charactertexttarget2);

  const voice1_1 = new Audio("voice/hpボイス1-1.mp3");
  const voicebutton1_1 = document.getElementById("chara1voice1");
  voicebutton1_1.addEventListener("click", () => {
    voice1_1.play();
  });
  const voice1_2 = new Audio("voice/hpボイス1-2.mp3");
  const voicebutton1_2 = document.getElementById("chara1voice2");
  voicebutton1_2.addEventListener("click", () => {
    voice1_2.play();
  });
  const voice1_3 = new Audio("voice/hpボイス1-3.mp3");
  const voicebutton1_3 = document.getElementById("chara1voice3");
  voicebutton1_3.addEventListener("click", () => {
    voice1_3.play();
  });

  const voice2_1 = new Audio("voice/hpボイス2-1.mp3");
  const voicebutton2_1 = document.getElementById("chara2voice1");
  voicebutton2_1.addEventListener("click", () => {
    voice2_1.play();
  });
  const voice2_2 = new Audio("voice/hpボイス2-2.mp3");
  const voicebutton2_2 = document.getElementById("chara2voice2");
  voicebutton2_2.addEventListener("click", () => {
    voice2_2.play();
  });
  const voice2_3 = new Audio("voice/hpボイス2-3.mp3");
  const voicebutton2_3 = document.getElementById("chara2voice3");
  voicebutton2_3.addEventListener("click", () => {
    voice2_3.play();
  });
}
