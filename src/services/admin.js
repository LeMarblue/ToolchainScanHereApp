const URL_BASE = 'http://localhost:8082/'

//function CountScans (id, token) {
function CountScans (id) {
  console.log('GET Scans!!!!!')
  console.log(id)
  const URL = `${URL_BASE}querys/countScansByProduct/${id}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}


export { 
  CountScans
}
