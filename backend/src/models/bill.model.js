
export default function (sequelize, DataTypes) {
    const Bill = sequelize.define('bill', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        contract_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        car_return_date: {
            type: DataTypes.DATE
        },
        note: {
            type: DataTypes.STRING
        },
        is_compensation: {
            type: DataTypes.BOOLEAN
        },
        compensation_money: {
            type: DataTypes.FLOAT
        }
    }, { freezeTableName: true, timestamps: false });

    Bill.associate = (models) => {
        Bill.Contract = Bill.belongsTo(models.Contract, {
            foreignKey: 'contract_id',
            as: 'contract'
        });
        Bill.Maintance = Bill.hasMany(models.Maintance, {
            foreignKey: 'bill_id',
            as: 'maintances'
        });
    };
    return Bill;
}
