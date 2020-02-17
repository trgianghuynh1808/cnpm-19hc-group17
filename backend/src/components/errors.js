import raven from 'raven';
import config from '../config';

/**
* All error handeling and errors used trouought the application.
* @module components/errors
*/

/**
 * The sentry client used trought the application
 * @type {sentryClient}
 */
export const sentryClient = new raven.Client(config.sentry, {
    release: require('../../package.json').version,
    tags: {
        environment: config.nodeEnv
    }
});

/**
* handleError - sends the error to sentry to further analysis.
*
* @param  {Object} error - Validation error from  Sequelize
*/
export function handleError(error) {
    if (config.env === 'production' || config.env === 'staging') sentryClient.captureError(error);
}
