/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device_model', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    manufacturer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'device_model'
  });
};
