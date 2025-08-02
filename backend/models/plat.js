module.exports = (sequelize, DataTypes) => {
  const Plat = sequelize.define('Plat', {
    nom_palt: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    ing_plat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Entrées', 'Plats', 'Désserts'),
      allowNull: false
    },
    id_cuisinier: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'plat',
    timestamps: false
  });

  Plat.associate = (models) => {
    Plat.belongsTo(models.cuisinier, { foreignKey: 'id_cuisinier' });
    Plat.belongsToMany(models.commande, {
      through: 'CommandePlat',
      foreignKey: 'nom_palt',
      otherKey: 'id_comm',     
      timestamps: false

    });
  };

  return Plat;
};
