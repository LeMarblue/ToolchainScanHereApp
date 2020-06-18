const port = '8082'
const domain = 'http://localhost'
const urlBase = `${domain}:${port}`

async function getAllPromotions (token) {
  try {
    const response = await fetch(`${urlBase}/promotions`, {
      headers: {
        Authorization: token
      }
    })
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.promotion
  } catch (error) {
    console.error(error.message)
    throw error
  }
}

async function getPromotionById (id, token) {
  try {
    const response = await fetch(`${urlBase}/promotions/${id}`, {
      headers: {
        Authorization: token
      }
    })
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.promotion
  } catch (error) {
    console.error(error.message)
    throw error
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
    throw error
  }
}
async function signup (newUserData) {
  try {
    const response = await fetch(`${urlBase}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData)
    })
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.user
  } catch (error) {
    console.error(error.message)
    throw error
  }
}

async function login (userData) {
  try {
    const response = await fetch(`${urlBase}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const parsedJson = await response.json()
    if (!parsedJson.success) {
      throw Error(parsedJson.error)
    }
    return parsedJson.data.token
  } catch (error) {
    console.error(error.message)
    throw error
  }
}

module.exports = {
  getAllPromotions,
  getPromotionById,
  getPromotionsScansByUser,
  signup,
  login
}
