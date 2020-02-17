/**
 * Entrypoint for starting the server
 * @module index
 */

import { migrateDB } from './utils/migrate';
import app from './app';
import config from './config';
import models from './models';
import { logger } from './components/logger';

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

const pathToMigration = `${__dirname}/migrations/`;
const db = migrateDB(models, pathToMigration)
            .catch(err => logger.error(err.message, err));

db.then(() => listen());
