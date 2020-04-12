import uuid from 'uuid/v4';


export default function (sequelize, DataTypes) {
    const Contract = sequelize.define('contract', {
        id: {
            type: DataTypes.STRING,
            defaultValue: uuid(),
            primaryKey: true
        },
        car_id: {
            type: DataTypes.INTEGER
        },
        start_rent_date: {
            type: DataTypes.DATE
        },
        end_rent_date: {
            type: DataTypes.DATE
        },
        deposit: {
            type: DataTypes.INTEGER
        },
        note: {
            type: DataTypes.STRING
        },
        identity_id: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }
    }, { freezeTableName: true });

    Contract.associate = (models) => {
        Contract.User = Contract.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        });
    };
    return Contract;
}
