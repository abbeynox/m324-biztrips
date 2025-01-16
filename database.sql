DROP DATABASE db1;

CREATE DATABASE db1;

CREATE TABLE Employee(
    idEmployee INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(45),
    title VARCHAR(45),
    PRIMARY KEY (idEmployee)
    );

CREATE TABLE Businesstrip(
    idBusinesstrip INT AUTO_INCREMENT NOT NULL,
    Description VARCHAR(45),
    title VARCHAR(45),
    PRIMARY KEY (idBusinesstrip)
    );

CREATE TABLE Businesstrip_has_Employee(
    Employee_idEmployee INT,
    Businesstrip_idBusinesstrip INT,
    FOREIGN KEY (Employee_idEmployee) REFERENCES Employee(idEmployee),
    FOREIGN KEY (Businesstrip_idBusinesstrip) REFERENCES Businesstrip(idBusinesstrip)
    );

CREATE TABLE Meeting(
    idMeeting INT AUTO_INCREMENT NOT NULL,
    Description VARCHAR(45),
    Businesstrip_idBusinesstrip INT,
    title VARCHAR(45),
    PRIMARY KEY(idMeeting),
    FOREIGN KEY(Businesstrip_idBusinesstrip) REFERENCES Businesstrip(idBusinesstrip)
    );

CREATE TABLE Flight(
    idFlight INT AUTO_INCREMENT NOT NULL,
    Number VARCHAR(45),
    Employee_idEmployee INT,
    `from` VARCHAR(45),
    `to`VARCHAR(45),
    PRIMARY KEY (idFlight),
    FOREIGN KEY (Employee_idEmployee) REFERENcES employee(idEmployee));