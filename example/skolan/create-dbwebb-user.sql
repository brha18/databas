--
-- Create a dbwebb-user as an alternate root user with
-- backward compatible login.
--
DROP USER IF EXISTS 'dbwebb'@'%';

CREATE USER 'dbwebb'@'%'
IDENTIFIED WITH mysql_native_password
BY 'password'
;

GRANT ALL PRIVILEGES
ON *.*
TO 'dbwebb'@'%'
;