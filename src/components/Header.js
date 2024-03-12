// function Menu(props) {

//     return (
//         <a href={props.url}> {props.name}</a>
//     );

// }

function Menu({name,url}) {

    return (
        <a href={url}> {name}</a>
    );

}
function Header() {

    const names = ["Ford", "Maruthi", "BMW"];
    const url = ["http://www.ford.com", "http://www.Maruthi.com", "http://www.BMW.com"]
    return (
        <>
            <h3> Application Header ...</h3>
            <Menu name={names[0]} url={url[0]}></Menu>
            <Menu name={names[1]} url={url[1]}></Menu>
            <Menu name={names[2]} url={url[2]}></Menu>
        </>
    );
}
export default Header;