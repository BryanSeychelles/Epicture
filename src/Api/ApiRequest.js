import env from '../../env.json'

module.exports = {

    async get(urlTarget: string) {
        const response = await fetch(env.issuer + urlTarget, {
            headers: new Headers({
                Authorization: `Client-ID ${env.clientId}`,
            }),
        })
        return await response.json()
    },

    async getProfile(urlTarget: string, authorization: string) {
        try {
            const response = await fetch(env.issuer + urlTarget, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + authorization
                }
            })
            console.log(response)
            return await response.json()
        } catch (error) { }
    },

    async favoriteAnImage(urlTarget: string, authorization: string) {
        try {
            const response = await fetch(env.issuer + urlTarget, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + authorization
                }
            })
            console.log(response)
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    },

    async postImage(targetUrl: string, authorization: {}, token: string) {
        console.log("UPLOAD")
        console.log(authorization)
        const formData = new FormData();
        if (authorization.video === undefined) {
            formData.append('image', authorization.image);
        } else if (authorization.image === undefined) {
            formData.append('video', authorization.video);
        }
        formData.append('name', authorization.name);
        formData.append('type', 'base64');
        formData.append('title', authorization.title);
        formData.append('description', authorization.description);


        try {
            const res = await fetch(env.issuer + targetUrl, {
                method: 'POST',
                headers: new Headers({
                    Authorization: `Bearer ${token}`,
                }),
                body: formData
            })
            console.log(res)
            return await res.json()
        } catch (error) {
            console.log(error)
            return error
        }
    },
}

