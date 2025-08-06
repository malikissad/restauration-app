module.exports = (sequelize, DataTypes) => {
  const Historique = sequelize.define("historique", {
    id_comm: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    date_comm: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    heure_comm: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    id_serveur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_tab: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_facture: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'historique',
    timestamps: false
  }
);

  return Historique;
};
