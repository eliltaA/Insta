export const csrfFetch = async (url, options = {}) => {
  options.method ||= 'GET'
  options.headers ||= {}
  
  if (options.method.toUpperCase() !== 'GET') {
    // have to skip setting 'Content-Type' header if using formData
    if (!(options.body instanceof FormData)){
    options.headers['Content-Type'] = 'application/json'
    }
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
  }
  
  const res = await fetch(url, options)
  if (res.status >= 400) throw res;
  return res
}

// fetch information about current user from the backend
// export const restoreSession = async () => {
//     try {
//       const res = await fetch('/api/session')
//       const token = res.headers.get('X-Csrf-Token')
//       if (res.ok) {
//         const data = await res.json()
//         sessionStorage.setItem('currentUser', JSON.stringify(data.user))
//         sessionStorage.setItem('csrfToken', token)
//       } else {
//         throw res
//       }
//     } catch {
//       console.error('restoreSession is broken')
//     }
//   }