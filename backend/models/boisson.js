module.exports = (sequelize, DataTypes) => {
  const Boisson = sequelize.define('Boisson', {
    nom_boisson: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM('jus', 'gazeau', 'café', 'thé'),
      allowNull: false
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quentite: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'boisson',
    timestamps: false
  });

  Boisson.associate = (models) => {
    Boisson.belongsToMany(models.commande, {
      through: 'CommandeBoisson',
      foreignKey: 'nom_boisson',
      otherKey: 'id_comm',
      timestamps: false,
      as: 'boissons'
    });
  };

  return Boisson;
};
