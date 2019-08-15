/* Write your T-SQL query statement below */

SELECT Email
FROM Person
GROUP BY Email
HAVING Count(*) > 1