let Environment = class {
    constructor(config) {
        this.config = config;
    }
};

Environment.ApiServer = class {
    constructor(config) {
        this.protocol = config.api_server.protocol;
        this.host     = config.api_server.host;
        this.port     = config.api_server.port;
        this.prefix   = config.api_server.prefix;
    }

    url_for(path) {
        return this.protocol + "://" + this.host + ":" + this.port + this.prefix + path;
    }

    competitors(callback) {
        let options = {
            method: 'GET',
            url:    this.url_for('/competitors'),
            async:  false
        };
        return Utility.request(options, callback);
    }
};