
module.exports = (sequelize,DataTypes) => {
    const Subscriptions = sequelize.define("Subscriptions",{
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    return Subscriptions ;
}