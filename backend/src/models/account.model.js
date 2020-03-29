export default function (sequelize, DataTypes) {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { freezeTableName: true, timestamps: false });

    Account.associate = (models) => {
        Account.User = Account.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    return Account;
}