var date = document.getElementById("date").value;

this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});

this.$dinnerSlideOut = $('#dinnerSlideOut');
this.$dinnerSlideOut.find('.dinnerslideOutTab').on('click', function() {
  $("#dinnerSlideOut").toggleClass('showDinnerSlideOut');
});

window.onload = function() {
  let usera = "a"
  createDay(usera);
  grocerylist();
}

//daily schedule generator
function createDay(a){
  let start = 7;
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
    let form = document.querySelector("#user" + a + "form");
    form.appendChild(time);
    form.appendChild(schedContainer);
  }
}


//grocery list generator
function grocerylist(){
  for(let i = 0; i < 25; i++){
    let groceryContainer = document.createElement('div');
    groceryContainer.setAttribute('id', 'g' + i);
    groceryContainer.setAttribute('class', 'groceryDiv');

    let groceryItem = document.createElement('input');
    groceryItem.setAttribute('type', 'text');
    groceryItem.setAttribute('id', "gi" + i);
    groceryItem.setAttribute('name', "gi" + i);
    groceryItem.setAttribute('class', 'gInput');

    groceryContainer.appendChild(groceryItem);
    let form = document.querySelector("#groceryform");
    form.appendChild(groceryContainer);
}
};