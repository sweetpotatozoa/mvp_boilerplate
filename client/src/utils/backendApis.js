const API_URI = process.env.REACT_APP_API_URI

const fetcher = async (url, token, method, params = {}) => {
  const resource =
    method === 'GET' ? `${url}?${new URLSearchParams(params)}` : url
  const init = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)
    ? {
        body: JSON.stringify(params),
        headers: {},
      }
    : { headers: {} }
  init.method = method
  init.headers['Content-Type'] = 'application/json'
  init.headers['x-access-token'] = token
  try {
    const res = await fetch(API_URI + resource, init)
    const data = await res.json()
    return data
  } catch (err) {
    return null
  }
}

class BackendApis {
  constructor() {
    this.token = localStorage.getItem('token')
  }

  async register(method = 'POST', params = {}) {
    const result = await fetcher('/auth/register', '', method, params)
    return result
  }

  async createTransaction(method = 'POST', params = {}) {
    const result = await fetcher('/buyer/items', this.token, method, params)
    return result
  }

  async login(method = 'POST', params = {}) {
    const result = await fetcher('/auth/login', '', method, params)
    if (result?.status === 200) {
      this.token = result.token
      // 로그인 성공 시 토큰을 localStorage에 저장
      localStorage.setItem('token', result.token)
    }
    return result
  }

  async traceTransaction(method = 'GET', params = {}) {
    const result = await fetcher(
      '/traceTransaction',
      this.token,
      method,
      params,
    )
    return result
  }

  async updateTransaction(method = 'PATCH', params = {}) {
    const result = await fetcher('/buyer/address', this.token, method, params)
    return result
  }

  async sellerCodeCheck(method = 'GET', params = {}) {
    const result = await fetcher(
      '/seller/codecheck',
      this.token,
      method,
      params,
    )
    return result
  }

  async requestUniqueCode(method = 'PUT', params = {}) {
    const result = await fetcher(
      '/buyer/uniqueCode',
      this.token,
      method,
      params,
    )
    return result
  }

  async updateSellerId(method = 'PUT', params = {}) {
    const result = await fetcher(
      '/seller/updateSellerId',
      this.token,
      method,
      params,
    )
    return result
  }
}
export default new BackendApis()
