module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    num_res: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nom_res: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heure_res: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Date_res: {
      type: DataTypes.DATE,
      allowNull: false
    },
    num_tab: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'reservation',
    timestamps: false
  });

  Reservation.associate = function (models) {
    Reservation.belongsTo(models.Table, { foreignKey: 'num_tab' });
  };

  return Reservation;
};
