import demoService from "../services/DemoService";
const Home = () => {
    console.log("Demo service data="+demoService.getData());
    return (
        <>
            <h3>Home</h3>
            <button className="btn btn-success">Hello</button>
        </>
    );
}
export default Home;