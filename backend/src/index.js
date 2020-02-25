/**
 * Entrypoint for starting the server
 * @module index
 */

import { migrateDB } from './db-helpers';
import app from './app';
import config from './config';

/**
 * listen - Starts the server with the config given by the environment variables
 *
 * @function listen
 * @memberof  module:index
 */
function listen() {
    app.listen(config.port, () => {
        console.log('Express server listening on %d, in %s mode', // eslint-disable-line
            config.port, app.get('env'));
    });
}

const db = migrateDB()
            .catch(err => console.log('err--------------', err));

db.then(() => listen());
