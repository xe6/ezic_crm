const DEALS_DATA = `SELECT Deals.id AS deal_id, contact_number, extra_info, course_name, fio AS teacher, 
contact_name AS client, CONCAT(firstName, lastName) AS employee_concluded
FROM Deals
INNER JOIN Courses ON Deals.Course_id = Courses.id
INNER JOIN Teachers ON Deals.Teacher_Id = Teachers.id
INNER JOIN Clients ON Deals.Client_Id = Clients.id
INNER JOIN Users ON Deals.Employee_concluded_id = Users.id
ORDER BY deal_id;`;

module.exports.DEALS_DATA = DEALS_DATA;