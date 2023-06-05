	CREATE DATABASE Epatient;
	use Epatient;

	Create table Users 
	(ID INT IDENTITY(1,1) PRIMARY KEY,
	FirstName varchar(100),
	LastName varchar(100),
	Password varchar(100),
	Email varchar(100),
	Fund decimal(18,2),
	Type varchar(100),
	Status INT ,
	CreatedOn Datetime)

	CREATE PROCEDURE sp_login
    @Email VARCHAR(100),
    @Password VARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Check if the user exists in the database based on the provided email and password
    SELECT
        ID,
        FirstName,
        LastName,
        Email,
        [Type]
    FROM
        Users
    WHERE
        Email = @Email AND
        Password = @Password;
END


	INSERT INTO Users (FirstName, LastName, Password, Email, Fund, Type, Status, CreatedOn)
VALUES ('John', 'Doe', 'password123', 'john.doe@example.com', 1000.00, 'Regular', 1, GETDATE());


	Create table Medicines(
	Id INT IDENTITY (1,1) primary key,
	Name varchar(100), 
	Manufacturer varchar(100),
	UnitPrice Decimal(18,2),
	Discount Decimal(18,2),
	Quantity INT,
    ExoDate datetime,
	ImageUrl varchar(200),
	Starus INT
	)

	EXEC sp_rename 'Medicines.Starus', 'Status', 'COLUMN';




	INSERT INTO Medicines (Name, Manufacturer, UnitPrice, Discount, Quantity, ExoDate, ImageUrl, Starus)
VALUES
  ('Paracetamol', 'ABC Pharmaceuticals', 10.50, 0.00, 100, '2023-12-31', 'http://example.com/paracetamol.jpg', 1),
  ('Ibuprofen', 'XYZ Pharma', 8.99, 0.10, 50, '2023-10-15', 'http://example.com/ibuprofen.jpg', 1),
  ('Aspirin', 'PQR Labs', 5.75, 0.05, 200, '2024-02-28', 'http://example.com/aspirin.jpg', 1);


	create table Cart(
	ID INT IDENTITY (1,1) PRIMARY KEY,
	UserID INT, 
	MedicineID INT,
	UnitPrice Decimal(18,2),
	Discount Decimal(18,2),
	Quantity INT,
	TotalPrice DECIMAL(18,2));

	create table Orders
	(
	ID int identity (1,1) primary key,
	UserId int,
	OrderNo varchar(100),
	OrderTotal DECIMAL(18,2),
	OrderStatus varchar(100))

	create table OrderItems
	(
	ID int identity (1,1) primary key,
	OrderID int ,
	MedicineId int,
	UnitePrice decimal(18,2),
	Discount decimal(18,2),
	Quantity int,
	TotalPrice decimal(18,2),
	)

	CREATE PROCEDURE AddUser
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Password NVARCHAR(50),
    @Email NVARCHAR(100),
    @Fund DECIMAL(18, 2),
    @Type NVARCHAR(50),
    @Status INT
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Users (FirstName, LastName, Password, Email, Fund, Type, Status, CreatedOn)
    VALUES (@FirstName, @LastName, @Password, @Email, @Fund, @Type, @Status, GETDATE());

    SELECT SCOPE_IDENTITY() AS UserID; -- Optional: Retrieve the generated user ID
END

	select * from users;
	select * from medicines;
	select * from cart;
		select * from Orders;
			select * from OrderItems;


select * from Epatient.INFORMATION_SCHEMA.ROUTINES
where ROUTINE_TYPE ='Procedure';

CREATE PROCEDURE AddUser
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Password NVARCHAR(50),
    @Email NVARCHAR(100),
    @Fund DECIMAL(18, 2) = 0,
    @Type NVARCHAR(50) = 'Users',
    @Status NVARCHAR(50) = 'Pending',
    @CreatedOn  datetime = null,
    @UserID INT OUTPUT
	
AS
BEGIN
    SET NOCOUNT ON;
	 IF @CreatedOn IS NULL
        SET @CreatedOn = GETDATE();
    

    BEGIN TRY
        INSERT INTO Users (FirstName, LastName, Password, Email, Fund, Type, Status, CreatedOn)
        VALUES (@FirstName, @LastName, @Password, @Email, @Fund, @Type, @Status, @CreatedOn);

        SET @UserID = SCOPE_IDENTITY();
    END TRY
    BEGIN CATCH
        SET @UserID = -1;
    END CATCH;
END
