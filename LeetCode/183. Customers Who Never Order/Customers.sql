/* Write your T-SQL query statement below */

SELECT Name as Customers
FROM Customers c
LEFT JOIN Orders o on c.Id = o.CustomerId
WHERE o.CustomerID IS NULL