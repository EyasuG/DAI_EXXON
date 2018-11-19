$.getJSON(URL, response => {
  response.forEach((val) => {
    let newVar = new Variable(val.name, val.sample_val, val.primary_definition)
    variableArray.push(newVar)
  })
}).then(function(){
	populateDropdown()
})