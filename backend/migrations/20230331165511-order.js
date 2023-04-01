'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        field: 'id'
      },
      name: {
        type: Sequelize.STRING(25),
        allowNull: false,
        field: 'name'
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['Male', 'Female','Other'],
        allowNull: false,
        field: 'gender'
      },
      weight: {
        type: Sequelize.STRING(6),
        allowNull: true,
        field: 'weight'
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'dateOfBirth'
      },
      guardian_name: {
        type: Sequelize.STRING(25),
        allowNull: false,
        field: 'guardianName'
      },
      relation: {
        type: Sequelize.ENUM,
        values: ['Father', 'Mother','Other'],
        allowNull: false,
        field: 'relation'
      },
      type_of_illness: {
        type: Sequelize.STRING(25),
        allowNull: false,
        field: 'typeOfIllness',
        references: {
          model: "illnesses", 
          key: 'illness_name', 
        }
      },
      illness_since: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'illnessSince'
      },
      symptoms: {
        type: Sequelize.JSON,
        allowNull: false,
        field: 'symptoms'
      },
      allergies: {
        type: Sequelize.JSON,
        allowNull: false,
        field: 'allergies'
      },
      medication: {
        type: Sequelize.JSON,
        allowNull: false,
        field: 'medication'
      },
      phone_number: {
        type: Sequelize.STRING(12),
        allowNull: false,
        field: 'phoneNo'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        },
        field: 'email'
      },
      delivery_address: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'delivery_address'
      },
      deivery_date: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'deivery_date'
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'latitude'
      },
      logitude: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'logitude'
      },
      city: {
        type: Sequelize.STRING(25),
        allowNull: false,
        field: 'city'
      },
      state: {
        type: Sequelize.STRING(25),
        allowNull: false,
        field: 'state'
      },
      postcode: {
        type: Sequelize.STRING(7),
        allowNull: false,
        field: 'postCode'
      }   
    }, { timestamps: false }, {
      indexes: [
        {
        unique: true,
        fields: ['name', 'date_of_birth', 'phone_number']
        }
      ]
      });
      await queryInterface.addIndex('illnesses', ['illness_name']);
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
