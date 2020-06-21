
export default function (sequelize, DataTypes) {
    const Contract = sequelize.define('contract', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
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
        address: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }
    }, { freezeTableName: true });

    Contract.associate = (models) => {
        Contract.Car = Contract.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        });

        Contract.Car = Contract.hasOne(models.Bill, {
            foreignKey: 'contract_id',
            as: 'contract'
        });
    };
    return Contract;
}
