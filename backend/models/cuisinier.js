module.exports = (sequelize, DataTypes) => {
  const cuisinier = sequelize.define('cuisinier', {
    id_cuisinier: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cuisinier',
    timestamps: false
  });

  cuisinier.associate = (models) => {
    cuisinier.hasOne(models.Plat, { foreignKey: 'id_cuisinier' });
  };

  return cuisinier;
};
