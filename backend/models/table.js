module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    num_tab: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nb_place: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('reservé', 'servie', 'occupée')
    }
  }, {
    tableName: 'table',
    timestamps: false
  });

  Table.associate = function(models) {
    Table.hasOne(models.commande, { foreignKey: 'num_tab' });
    Table.hasOne(models.Reservation, { foreignKey: 'num_tab' });
  };

  return Table;
};
