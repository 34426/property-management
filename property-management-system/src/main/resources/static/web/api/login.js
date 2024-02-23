function loginApi(data) {
  return $axios({
    'url': '/user/login',
    'method': 'get',
    params: data
  })
}

function logoutApi(){
  return $axios({
    'url': '/user/logout',
    'method': 'post',
  })
}
