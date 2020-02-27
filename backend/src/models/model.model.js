import sha256 from 'sha256';

/**
* Example model - create and export the database model for the example
* including all assosiations and classmethods assiciated with this model.
* @memberof  module:models/Example
* @param  {Object} sequelize description
* @param  {Object} DataTypes description
*/

export default function (sequelize, DataTypes) {
    const Model = sequelize.define('model', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { freezeTableName: true });
    return Model;
}