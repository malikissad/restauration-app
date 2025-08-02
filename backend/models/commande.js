module.exports = (sequelize, DataTypes) => {
  const commande = sequelize.define('commande', {
    id_comm: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('En Préparation', 'En Attente', 'Servie'),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_Comm: {
      type: DataTypes.DATE,
      allowNull: false
    },
    heure_Comm: {
      type: DataTypes.TIME,
      allowNull: false
    },
    num_tab: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_serveur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_facture: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'commande',
    timestamps: false
  });

  commande.associate = (models) => {
    commande.belongsTo(models.Table, { foreignKey: 'num_tab' });
    commande.belongsTo(models.Facture, { foreignKey: 'id_facture' });
    commande.belongsTo(models.Server, { foreignKey: 'id_serveur' });

    commande.belongsToMany(models.Boisson, {
      through: 'CommandeBoisson',
      foreignKey: 'id_comm',
      otherKey: 'nom_boisson'
    });

    commande.belongsToMany(models.Plat, {
      through: 'CommandePlat',
      foreignKey: 'id_comm',
      otherKey: 'nom_palt',
      timestamps: false,
      as: 'commandes'
    });
  };

  return commande;
};
