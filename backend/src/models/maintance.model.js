
export default function (sequelize, DataTypes) {
    const Maintance = sequelize.define('maintance', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        car_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        staff_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_maintance_date: {
            type: DataTypes.DATE
        },
        end_maintance_date: {
            type: DataTypes.DATE
        },
        description: {
            type: DataTypes.STRING
        },
        bill_id: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        }
    }, { freezeTableName: true, timestamps: false });

    Maintance.associate = (models) => {
        Maintance.Bill = Maintance.belongsTo(models.Bill, {
            foreignKey: 'bill_id',
            as: 'bill'
        });

        Maintance.Staff = Maintance.belongsTo(models.Account, {
            foreignKey: 'staff_id',
            as: 'staff'
        });

        Maintance.Car = Maintance.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        });
    };

    return Maintance;
}
