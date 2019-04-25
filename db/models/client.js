"use strict";
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    contact_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.ENUM("potencial", "enrolled", "gone", "beneficial", "active")
  },
  {
    timestamps: true
  });

  Client.associate = function(models) {
    Client.hasMany(models.Deal);
  };
  return Client;
};
