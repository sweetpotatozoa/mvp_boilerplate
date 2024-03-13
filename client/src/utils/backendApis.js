const API_URI = process.env.REACT_APP_API_URI

const fetcher = async (url, token, method, params = {}) => {
  const resource =
    method === 'GET' ? `${url}?${new URLSearchParams(params)}` : url
  const init = ['POST', 'PUT', 'DELETE'].includes(method)
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

  async login(method = 'POST', params = {}) {
    const result = await fetcher('/auth/login', '', method, params)
    if (result?.status === 200) {
      this.token = result.token
      // 로그인 성공 시 토큰을 localStorage에 저장
      localStorage.setItem('token', result.token)
    }
    return result
  }

  async uploadFile(file) {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(`/upload/file`, {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      return result
    } catch (error) {
      console.error('파일 업로드 중 오류 발생', error)
      return null
    }
  }
}

export default new BackendApis()
