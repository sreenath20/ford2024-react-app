
function ProfessionTable({ peoples, profession }) {
    console.log(peoples);
    console.log(profession);

    peoples = peoples.filter((ppl) => ppl.profession === profession);
    console.log(peoples);
    return (

        <>
            <h3> All {profession} Details:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Profession</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        peoples.map((emp) => <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.profession}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>

    );
}


function A() {
    return <p>Component A para</p>
}

function B() {
    return <p>Component A para</p>
}
function Demo() {

    let isHeader1 = false;
    const element1 = (
        <>
            <h6> Demo Header 1</h6>
            <p>This is my demo para 1</p>
        </>
    );

    const element2 = (
        <>
            <h6> Demo Header 2</h6>
            <p>This is my demo para 2</p>
        </>
    );
    const element3 = (
        <>
            <h6> Demo Header 3</h6>
            <p>This is my demo para 3</p>
        </>
    );
    let count = 4;
    let objRef = { id: 1, name: "Ford", salary: 5550000.0 };
    let isEmpPresent = objRef !== null;
    console.log(isEmpPresent);

    const employeeElement = (
        isEmpPresent &&
        <>
            <h6>  Employee Details:</h6>
            <p>Id: {objRef.id}</p>
            <p>Name: {objRef.name}</p>
            <p>Salary: {objRef.salary}</p>
        </>
    );
    let condition = true;

    let fruits = ["Apple", "Grapes", "Kiwi"];

    let employees = [
        { id: 1, name: "Ford", salary: 10000.0 },
        { id: 2, name: "Ford 2", salary: 20000.0 },
        { id: 3, name: "Ford 3", salary: 30000.0 }
    ];

    let employeeTableElement = (
        <>
            <h3> All Employee Details:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
    let fruitListElements = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

    const peoples = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    },
    {
        id: 5,
        name: 'Ford India',
        profession: 'mathematician',
    }
    ];
    let chemists = peoples.filter((ppl) => ppl.profession === 'chemist');

    let chemistTableElement = (
        <>
            <h3> All Chemist Details:</h3>
            <table>
                <thead>

                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Profession</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        chemists.map((emp) => <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.profession}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );

    return (

        <>
            <ProfessionTable peoples={peoples} profession="mathematician"></ProfessionTable>

            {chemists.length > 0 ? <ProfessionTable peoples={chemists} profession="chemist"></ProfessionTable> : <h3>No chemists Found!</h3>}

            {chemists.length > 0 ? chemistTableElement : <h3>No chemists Found!</h3>}

            {employees.length > 0 && employeeTableElement}
            {employees.length > 0 ? employeeTableElement : <h3>No Employees Found</h3>}

            <ol> {fruitListElements}</ol>
            {condition ? <A /> : <B />}

            {isHeader1 ? element1 : element2}

            {employeeElement}

        </>
    );
}
export default Demo;