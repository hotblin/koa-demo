/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "business",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      // 方法1
      // 需要在下面将 orm 自带的的 createdAt 对应到 created_at
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },

      // 方法2,这个容易导致sql执行
      // SELECT `id`, `name`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt`, `del` FROM `business` AS `business` WHERE `business`.`name` = '无限战争' LIMIT 1;
      // field 该字段对应数据库中的哪个字段
      // createdAt: {
      //   field: "created_at",
      //   type: DataTypes.DATE,
      //   allowNull: true,
      //   defaultValue: DataTypes.NOW
      // },
      // updatedAt: {
      //   field: "updated_at",
      //   type: DataTypes.DATE,
      //   allowNull: true,
      //   defaultValue: DataTypes.NOW
      // },
      del: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      timestamps: true,
      tableName: "business",
      createdAt: "created_at",
      updatedAt: "updated_at"

      /**
       * 我不想启用 deletedAt 所以设置为false 而且 paranoid 要启用
       */
      // deletedAt: false,
      // paranoid: true
    }
  );
};

/**
 * Sequelize 自动会生成 createdAt
 * createdAt 关联到  created_at
 * defaultValue 调用 NOW 函数会自动更新时间戳
 */
