function Menu(props) {

    //props.name = "Sreenath"; // props are immutable
    //let name = props.name + "Change";

    return (
        <a href={props.url} style={{ padding: 10 }}> {props.name}</a>
    );

}

function Menu2({ name, url }) { // props : parameter to my react functions

    return (
        <a href={url} style={{ padding: 10 }}> {name}</a>
    );

}
function Header() {

    const names = ["Ford", "Maruthi", "BMW"];
    const url = ["http://www.ford.com", "http://www.Maruthi.com", "http://www.BMW.com"]
    return (
        <>
            <h3> Application Header ...</h3>
            {/* // one way data binding
           <img src=""></img> */ }
            <Menu name={names[0]} url={url[0]}></Menu>
            <Menu name={names[1]} url={url[1]}></Menu>
            <Menu2 name={names[2]} url={url[2]}></Menu2>
        </>
    );
}
export default Header;