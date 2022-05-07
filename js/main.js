const apihost = 'bastiat.hopto.org:3019';


async function getEndpoint(host, input, num=5) {
  const destination = document.getElementsByClassName('output')[0]
  const placeholder = document.createElement('pre')
  const info = document.getElementsByTagName('h4')[1]
  const url = `http://${host}${input}`

  info.innerHTML = `API Call to ${input}`
  console.log(info.innerHTML, num)
  results = await axios.get(url)

  placeholder.innerHTML = JSON.stringify(results.data, null, 4)
  destination.appendChild(placeholder)
}




getEndpoint(apihost,'/api/food')
