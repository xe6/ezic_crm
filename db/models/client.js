"use strict";
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      contact_name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.ENUM("potencial", "enrolled", "gone", "beneficial", "active")
    },
    {
      timestamps: true
    }
  );
  Client.associate = function(models) {
    Client.belongsTo(models.Deal, {
      foreignKey: "id",
      targetKey: "id_client"
    })
  };
  return Client;
};
