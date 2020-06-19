const URL_BASE = 'http://localhost:8082/'

//function CountScans (id, token) {
function CountScans (product_id,promo_id,token) {
  const URL = `${URL_BASE}querys/countScansByProduct/${product_id}?promo_id=${promo_id}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}


function countScansByDate (promo_id,product_id,date,token) {
  console.log(product_id)
  const URL = `${URL_BASE}querys/countScansByProduct/${product_id}?promo_id=${promo_id}&date=${date}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}



function getPromo (id,token) {
  console.log(id)
  const URL = `${URL_BASE}promotions/${id}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function getProducts (token) {
  const URL = `${URL_BASE}products`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function createPromo (dataPromo, token) {
//function createPromo (dataPromo) {
  const URL = `${URL_BASE}promotions`
  const options = {
    method: 'POST',
    body: JSON.stringify(dataPromo),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}
function createProduct (dataProduct, token) {
  //function createProduct (dataProduct) {
    const URL = `${URL_BASE}products`
    const options = {
      method: 'POST',
      body: JSON.stringify(dataProduct),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      mode: 'cors'
    }
    return window.fetch(URL, options)
  }

export { 
  CountScans,
  getPromo,
  countScansByDate,
  getProducts,
  createPromo,
  createProduct
}
