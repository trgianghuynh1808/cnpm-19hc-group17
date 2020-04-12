export default function (sequelize, DataTypes) {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
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
