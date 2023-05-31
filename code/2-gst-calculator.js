// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')

  let price = prompt('What is the cost before GST?')
  let gst = price * 1.15

  alert('The cost with GST is ' + gst)
}
