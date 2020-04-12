
export default function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        identity_id: {
            type: DataTypes.STRING
        }
    }, { freezeTableName: true, timestamps: false });

    return User;
}
