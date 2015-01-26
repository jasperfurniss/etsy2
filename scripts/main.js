(function() {
  'use strict';

  var cacti = rawCactusData.results;

  $(document).ready(function() {

    var $list = $('.cactus-list');

    cacti.forEach(function(cactus) {
      var cactusText = renderTemplate('cactus-item', {
        image: cactus.Images[0].url_170x135,
        title: cactus.title,
        cost: cactus.price,

      });
      $list.append(cactusText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

})();

$(document).ready(function() {

  $('#trigger').click(function(event) {

    event.stopPropagation();

    $('#drop').toggle();

  });

  $(document).click(function() {

    $('#drop').hide();

  });

});
