//Comments model

module.exports = (sequelize,DataTypes) => {
    const Comments = sequelize.define("Comments",{
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Comments ;
}