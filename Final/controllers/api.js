const secrets = require('../secrets');
const AI_API = require('apiai')(secrets.apiai.key);

module.exports = {
    text: ( req, res ) => {
        // http://localhost/api/ai/text?q=5%20minutes
        var request = AI_API.textRequest(req.params.command);

        request.on('response', (response) => {
            res.send(response);
        });

        request.end();
    }
}