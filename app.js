var input = document.getElementById('input-url')
var handsontableContainer = document.getElementById('handsontable-container')
var btn = document.getElementById('open')

btn.onclick = function () {
  fetch(input.value)
    .then(r => r.text())
    .then(csv => {
      var data = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true
      })
  
      // reset container
      handsontableContainer.innerHTML = ''
      handsontableContainer.className = ''
      document.querySelector('.intro').remove()
  
      Handsontable(handsontableContainer, {
        data: data.data,
        rowHeaders: true,
        colHeaders: data.meta.fields,
        columnSorting: true,
        dropdownMenu: true,
        filters: true,
        width: '100%',
        licenseKey: 'non-commercial-and-evaluation',
      })
    })
    .catch(e => console.log(e))
}
