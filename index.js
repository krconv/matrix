const http = require('http')
const port = 80

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('<iframe style="position: absolute; top: 0; left: 0;" src="https://www.youtube.com/embed/ZY3J3Y_OU0w?controls=0&amp;theme=dark&amp;autoplay=1&amp;autohide=1&amp;modestbranding=1&amp;fs=0&amp;showinfo=0&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="100%" height="100%"></iframe>')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})