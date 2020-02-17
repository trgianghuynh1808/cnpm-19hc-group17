/**
 * Creates and exports and umzug class to be used to migrate the database
 * @module db-helpers/migrate
 */
import Umzug from 'umzug';

/**
 * default - exports default function
 *
 * @function default
 * @memberof  module:db-helpers/migrate
 * @param  {SequlizeDBInstance} sequlizeInstance - The database to be migrated, create from models
 * @param {models} - All model from service
 * @return {Umzug} - Used to migrate database
 */
export default function (sequlizeInstance, path, db) {
    return new Umzug({

        storage: 'sequelize',

        storageOptions: {
            sequelize: sequlizeInstance
        },

        migrations: {
            params: [
                sequlizeInstance.getQueryInterface(),
                sequlizeInstance.constructor,
                db,
                () => {
                    throw new Error(`Migration tried to use old style "done" callback.
                    Please upgrade to "umzug" and return a promise instead.`);
                }
            ],
            path,
            pattern: /\.migration.js$/
        }

    });
}