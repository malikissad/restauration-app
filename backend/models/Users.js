module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id_users: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('gerant', 'serveur', 'cuisinier', 'caissier'),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  // Définir les associations ici si nécessaire
  Users.associate = function (models) {
    // exemple : Users.hasMany(models.Commande, { foreignKey: 'id_users' });
  };

  return Users;
};
