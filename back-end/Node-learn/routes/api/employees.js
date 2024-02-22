const express = require('express');
const router = express.Router();
const path = require('path');
const data = {};
data.employees = require('../../model/employees.json');
const employeesController = require('../../controllers/employeesController')
const ROLES_LIST = require('../../config/role_list')
const verifyRoles = require('../../middleware/verifyRoles')


router.route('/')
    .get(employeesController.getAllEmployee)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateNewEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee)


router.route('/:id')
    .get(employeesController.getEmployee)

module.exports = router