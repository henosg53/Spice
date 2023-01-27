//blogs model
module.exports = (sequelize,DataTypes) => {
    const Blogs = sequelize.define("Blogs",{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Blogs;
}