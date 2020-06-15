const port = '8080'
const domain = 'http://localhost'
const urlBase = `${domain}:${port}`

async function getAllPromotions () {
  try {
    const response = await fetch(`${urlBase}/promotions`)
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.promotion
  } catch (error) {
    console.error(error.message)
  }
}

async function getPromotionById (id) {
  try {
    const response = await fetch(`${urlBase}/promotions/${id}`)
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.promotion
  } catch (error) {
    console.error(error.message)
  }
}

async function getPromotionsScansByUser (token, promotionId) {
  try {
    const response = await fetch(`${urlBase}/promotions/${promotionId}/scans/`, {
      headers: {
        Authorization: token
      }
    })
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.scans
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = {
  getAllPromotions,
  getPromotionById,
  getPromotionsScansByUser
}
