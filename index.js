const { Op, where } = require('sequelize');
const { sequelize, Student, Group } = require('./models');

// sync db by model
// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync Ok'))
//   .catch(err => console.log('err:', err));

// (async function () {
// CRUD
// C - Create
// const newStudent = {
//   firstName: 'Test',
//   lastName: 'Testovich',
//   email: 'm1@m10.com',
//   birthday: '2000-08-03',
//   isMale: true,
// };
// const createdStudent = await Student.create(newStudent);
// console.log('createdStudent:', createdStudent.get());
// R - SELECT - findAll / findOne / findByPk
// const foundStudents = await Student.findAll({ raw: true });
// console.log('foundStudents:', foundStudents);
// const foundStudent = await Student.findByPk(1, { raw: true });
// console.log('foundStudent:', foundStudent);
// const foundStudents = await Student.findAll({
//   raw: true,
//   attributes: ['firstName', 'email'],
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   attributes: { exclude: ['createdAt', 'updatedAt'] },
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   order: [['id', 'DESC']],
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   order: [['id', 'DESC']],
//   limit: 2,
//   offset: 2,
//   attributes: { exclude: ['createdAt', 'updatedAt'] },
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   order: [['firstName']],
//   limit: 3,
//   offset: 3,
//   attributes: { exclude: ['createdAt', 'updatedAt'] },
// });
// console.log('foundStudents:', foundStudents);
// const foundStudent = await Student.findAll({
//   raw: true,
//   where: {
//     id: 3,
//   },
// });
// console.log('foundStudent:', foundStudent);
// const foundStudent = await Student.findAll({
//   raw: true,
//   where: {
//     isMale: true,
//     email: 'm1@m4.com',
//   },
// });
// console.log('foundStudent:', foundStudent);
// const foundStudent = await Student.findAll({
//   raw: true,
//   where: {
//     [Op.or]: [{ id: 5 }, { email: 'm@m.com' }],
//   },
// });
// console.log('foundStudent:', foundStudent);
// const studentsCount = await Student.findAll({
//   raw: true,
//   attributes: [sequelize.fn('COUNT', sequelize.col('id'))],
// });
// console.log('studentsCount:', studentsCount);
// const foundStudents = await Student.findAll({
//   raw: true,
//   attributes: {
//     include: [sequelize.fn('age', sequelize.col('birthday'))],
//   },
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   attributes: {
//     include: [
//       [sequelize.literal('EXTRACT (YEAR FROM age(birthday))'), 'age'],
//     ],
//   },
// });
// console.log('foundStudents:', foundStudents);
// const foundStudents = await Student.findAll({
//   raw: true,
//   attributes: [
//     'isMale',
//     [
//       sequelize.fn('sum', sequelize.col('activitiesCount')),
//       'stud_activitiesCount',
//     ],
//   ],
//   group: 'isMale',
//   having: sequelize.literal('sum("activitiesCount") >= 0'),
// });
// console.log('foundStudents :>> ', foundStudents);
// U - UPDATE
// const updatedStudent = await Student.update(
//   { firstName: 'Ivo' },
//   {
//     where: { id: 1 },
//     raw: true,
//     returning: true,
//   }
// );
// console.log('updatedStudent:', updatedStudent[1][0]);
// D - DELETE
// const deletedStudCount = await Student.destroy({
//   where: { id: 3 },
// });
// console.log('deletedStudCount:', deletedStudCount);
// })();

(async function () {
  // const newGroup1 = {
  //   title: 'pe2022-1',
  //   enteredAt: '2022-01-01',
  // };
  // const newGroup2 = {
  //   title: 'pe2023-1',
  //   enteredAt: '2023-01-01',
  // };
  // const createdGroup1 = await Group.create(newGroup1);
  // const createdGroup2 = await Group.create(newGroup2);
  // console.log(createdGroup1.get(), createdGroup2.get());
  // const newStudent1 = {
  //   firstName: 'Test',
  //   lastName: 'Testovich',
  //   email: 'm1@m.com',
  //   groupId: 1,
  // };
  // const newStudent2 = {
  //   firstName: 'Test',
  //   lastName: 'Testovich',
  //   email: 'm2@m.com',
  //   groupId: 1,
  // };
  // const newStudent3 = {
  //   firstName: 'Test',
  //   lastName: 'Testovich',
  //   email: 'm3@m.com',
  //   groupId: 2,
  // };
  // const createdStudent1 = await Student.create(newStudent1);
  // const createdStudent2 = await Student.create(newStudent2);
  // const createdStudent3 = await Student.create(newStudent3);
  // console.log(createdStudent1.get(), createdStudent2.get(), createdStudent3.get());
  // Eager Loading - JOINS
  // const foundStudentsWithGroups = await Student.findAll({
  //   raw: true,
  //   include: 'Group',
  // });
  // console.log('foundStudentsWithGroups:', foundStudentsWithGroups);
  // const foundGroupsWithStudents = await Group.findAll({
  //   raw: true,
  //   include: 'Students',
  // });
  // console.log('foundGroupsWithStudents:', foundGroupsWithStudents);
  // const foundGroupsWithStudents = await Group.findAll({
  //   raw: true,
  //   include: 'Students',
  // });
  // console.log('foundGroupsWithStudents:', foundGroupsWithStudents);
  // Lazy loading - work with associations
  // Student.belongTo => student.getGroup(), ...
  // const student1Inst = await Student.findByPk(1);
  // const groupOfStud1 = await student1Inst.getGroup({ raw: true });
  // console.log('groupOfStud1:', groupOfStud1);
  // Group.hasMany => group.getStudents(), ...
  // const group1Inst = await Group.findByPk(1);
  // const studOfGroup1 = await group1Inst.getStudents({ raw: true });
  // console.log('studOfGroup1:', studOfGroup1);
})();
