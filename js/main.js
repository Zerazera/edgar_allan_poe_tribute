$(document).ready(main);

function main() {
  var nextId;
  $('.list-group li').addClass('list-group-item transbox movecursor');
  $('.list-group').sortable({
    update: function() {
    nextId = 1;
    $('.list-group li').each(function(){
      if ($(this).attr('id') === '' + nextId) {
        nextId++;
        if (nextId === 14) {
          $('.list-group').sortable('disable');
          $('.list-group li').removeClass('movecursor');
          $('#raven').show();
          $('#ravenPicture').addClass('animateRaven');
          setInterval(function(){$('#ravenPicture').toggleClass('transformRaven');}, 5000);
          alert('Congratulations! You have released the raven.');
        }
      }    
    else return;
    });
  }
 });
  $('.list-group').disableSelection();
}
