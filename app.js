// TODO : Mengambil data dari Github
let https = require('https');
const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/adityaardiansyah',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}
let request = https.request(options, (response) => {
    let body = ''
    response.on('data', (data) => {
        body = body + data
    })    
    response.on('end', () => {
        console.log(body)
    })
})

// TODO: Parse the data
// TODO: Convert String to JSON (Javascript Object)

// TODO: Print the data out


request.end()

request.on('error', (e)=>{
    console.log(e)
})

