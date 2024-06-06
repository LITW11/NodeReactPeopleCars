const sql = require('mssql/msnodesqlv8');
const camelCaseDeep = require('camelcase-object-deep');

const config = {
    database: 'ReactPeopleCars',
    server: '.\\sqlexpress',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

const addPerson = async person => {
    await sql.connect(config);

    const { firstName, lastName, age } = person;
    await sql.query`INSERT INTO People (FirstName, LastName, Age) VALUES(${firstName}, ${lastName}, ${age})`;

    await sql.close();
}

const getPeople = async () => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT p.*, count(c.make) AS 'CarCount' FROM People p 
                                LEFT JOIN Cars c 
                                ON p.Id = c.PersonId
                                GROUP BY p.id, p.FirstName, p.LastName, p.age`;
    await sql.close();

    return recordset;
}

const getCars = async personId => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT * FROM Cars WHERE PersonId = ${personId}`;
    await sql.close();
    return recordset;
}

const deleteCars = async personId => {
    await sql.connect(config);
    await sql.query`DELETE FROM Cars WHERE PersonId = ${personId}`;
    await sql.close();
}

const getPerson = async id => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT * FROM People WHERE Id = ${id}`;
    await sql.close();
    return recordset.length ? recordset[0] : null;
}

const addCar = async car => {
    const { make, model, year, personId } = car;
    await sql.connect(config);

    const { recordset } = await sql.query`INSERT INTO Cars (Make, Model, Year, PersonId) VALUES(${make}, ${model}, ${year}, ${personId}) 
    SELECT SCOPE_IDENTITY() as 'id'`;

    console.log(recordset[0].id);

    await sql.close();
}

module.exports = { addPerson, getPeople, getCars, deleteCars, getPerson, addCar };