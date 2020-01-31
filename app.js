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
let request = https.request(options, (result) => {
    console.log(result.statusCode)    
})

request.end()

request.on('error', (e)=>{
    console.log(e)
})