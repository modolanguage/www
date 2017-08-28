$('document').ready(() => {

  // Move To; Scroll Animation
  const moveTo = new MoveTo();
  const trigger = document.getElementsByClassName('js-trigger');
  for (let i = 0; i < trigger.length; i++) {
    moveTo.registerTrigger(trigger[i]);
  }

  var sectionMotivation = document.getElementById('sectionMotivation');
  console.log(sectionMotivation.offsetTop);
});

