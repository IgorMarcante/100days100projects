window.onload = handleGetInfo;

function handleGetInfo() {
  var list = document.getElementById('container').innerHTML;
  list = '';
  fetch(`https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json`)
    .then(res => res.json())
    .then(data => {
      data.components.filter(element => element.id !== '0l2p9nhqnxpd' && element.id !== '5l5rlzqm4yzy').forEach(element => {
        list = list + `<div class='line-status'><p class='name'>${element.name}</p><p class='status ${(element.status) !== 'operational' ? 'status-error' : ''}'>${element.status}</p></div>`

        document.getElementById("container").innerHTML = list;
      });
    })
}