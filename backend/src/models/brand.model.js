import sha256 from 'sha256';

/**
* Example model - create and export the database model for the example
* including all assosiations and classmethods assiciated with this model.
* @memberof  module:models/Example
* @param  {Object} sequelize description
* @param  {Object} DataTypes description
*/

export default function (sequelize, DataTypes) {
    const Brand = sequelize.define('brand', {
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
    }, { freezeTableName: true, timestampz: false });

    // Brand.associate = (models) => {
    //     Brand.Car = Brand.hasMany(models.Car, {
    //         as: 'cars'
    //     });
    // }

    return Brand;
}