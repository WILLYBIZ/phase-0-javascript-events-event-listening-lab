function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('input', function() {
  alert('I was clicked!');
});
}
addingEventListener();