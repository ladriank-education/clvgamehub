const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Game', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    directory: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'game',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "game_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
