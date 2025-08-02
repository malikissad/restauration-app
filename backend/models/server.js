module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    id_serveur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'server',
    timestamps: false
  });

  Server.associate = function (models) {
    Server.hasMany(models.commande, { foreignKey: 'id_serveur' });
  };

  return Server;
};
