module.exports = (sequelize, DataTypes) => {
  const Facture = sequelize.define('Facture', {
    id_facture: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    addition: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'facture',
    timestamps: false
  });

  Facture.associate = (models) => {
    Facture.hasOne(models.commande, { foreignKey: 'id_facture' });
  };

  return Facture;
};
