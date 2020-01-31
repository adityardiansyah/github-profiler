let get = (name) => {
    // TODO : Mengambil data dari Github
    let https = require('https');
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/users/${name}`,
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

            if (response.statusCode === 200) {
                // TODO: Parse the data
                // TODO: Convert String to JSON (Javascript Object)
                let profile = JSON.parse(body)

                // TODO: Print the data out
                console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s)`)
            } else {
                console.log(`Mohon Maaf User ${name} Tidak ada`)
            }
        })
    })

    request.end()

    request.on('error', (e) => {
        console.log(e)
    })
}

module.exports = {
    get
}