use employees;

INSERT INTO
	department(name)
VALUES
	('Interior Design'),
    ('Architect/Engineering'),
    ('Administrative');
    
INSERT INTO
	role(title, salary, department_id)
VALUES
	('Design Librarian', 35000, 1),
    ('Office Manager', 55000, 3),
    ('Design Assistant', 40000, 1),
    ('FFE Specialist', 50000, 1),
    ('Project Designer', 65000, 1),
    ('Project Manager', 75000, 2);
    
INSERT INTO
	employee(first_name, last_name, role_id, manager_id)
VALUES
	('April', "Anderson", 1, 4),
    ('Barbara', "Brown", 3, null),
    ('Cody', "Cornwall", 1, 5),
    ('Darlene', "Day", 1, 5),
    ('Edward', "Eggbert", 1, 6),
    ('Francis', "Fredrickson", 2, null);