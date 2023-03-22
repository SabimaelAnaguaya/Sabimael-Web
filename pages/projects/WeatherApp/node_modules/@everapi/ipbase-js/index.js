'use strict';

class Ipbase {
    baseUrl = 'https://api.ipbase.com/v2/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call (endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    status () {
        return this.call('status');
    }

    info (params) {
        return this.call('info', params);
    }
}

export default Ipbase;
