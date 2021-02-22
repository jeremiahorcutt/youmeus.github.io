var date = document.getElementById("date").value;

this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});

window.onload = function() {
  let usera = "a"
  createDay(usera);
}

//daily schedule generator
function createDay(a){
  let start = 8;
  let media = 0;
  let ap = "a";
  for(let i = 0; i < 25; i++){
    let time = document.createElement('h3');
    let schedContainer = document.createElement('div');
    schedContainer.setAttribute('id', i + 'container' + a);
    schedContainer.setAttribute('class', 'agendDiv');

    let sched = document.createElement('input');
    sched.setAttribute('type', 'text');
    sched.setAttribute('id', i + 'sched' + a);
    sched.setAttribute('name', i + 'sched' + a);
    sched.setAttribute('class', 'agenInput');

    if((i + 2) % 2 == 0){
      media = 0;
      start += 1;
      if(start > 12){
        start = 1;
      }
    }else{
      media = 3;
    };

    if(i > 7){
      ap = "p";
    }else{
      ap = "a";
    };

    time.textContent = start + ":" + media + "0 " + ap + ".m.";
    schedContainer.appendChild(sched);
    time.appendChild(schedContainer); 
    let form = document.querySelector("#user" + a + "form");
  form.appendChild(time);
  }
}


//grocery list generator
function createDay2(){

}