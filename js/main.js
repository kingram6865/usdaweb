
async function getEndpoint(host, input, num) {
  const destination = document.getElementsByClassName('output')[0]
  const placeholder = document.createElement('pre')
  const info = document.getElementsByTagName('h4')[1]
  const url = `http://${host}${input}`
  // console.log(url)
  // console.log(destination)
  info.innerHTML = `API Call to ${input}`
  console.log(info.innerHTML, num)
  results = await axios.get(url)
  // console.log(results)
  placeholder.innerHTML = JSON.stringify(results.data, null, 4)
  destination.appendChild(placeholder)
}

getEndpoint('athena:3019','/api/food', num=5)
