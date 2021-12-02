'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Appointments',
			[
				{
					physicianId: 1,
					patientId: 4,
					appointmentDate: '2021-12-05',
					description: 'Exame Físico',
				},
				{
					physicianId: 4,
					patientId: 3,
					appointmentDate: '2021-12-10',
					description: 'Exame Físico',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Appointments', null, {});
	},
};
