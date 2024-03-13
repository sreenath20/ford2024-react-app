
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
    let objRef = { id: 1, name: "Ford", salary: 5550000.0 }
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
    return (
        <>
            {isHeader1 ? element1 : element2}
            {employeeElement}

        </>
    );
}
export default Demo;