const scriptURL = 'https://script.google.com/macros/s/AKfycbwEulKxkBLrHQ_R3sbA6rax77JgfnldQAs8TEzrAJ5-y7kd6y0/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))

  $('#myModal').modal('toggle'); //or  $('#IDModal').modal('hide');
  return false;
})
