/**
 * This plugin allows for logging along the request lifecycle. The actual
 * logger function is defined in options/context/logger.js
 */

const logging = {
  requestDidStart (/*requestContext*/) {
    // const { request, context: { logger } } = requestContext;

    // logger('debug', `request: ${request.query} ${JSON.stringify(request.variables)}`);

    return {
      willSendResponse (/*requestContext*/) {
        // const { response, context: { logger } } = requestContext;

        // logger('debug', `response: ${JSON.stringify(response.data)}`);
      }
    };
  }
};

module.exports = logging;
