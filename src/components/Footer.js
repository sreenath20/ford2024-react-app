function Footer() {

    const url = "https://www.google.com";
    const url2 = "https://www.ford.com";

    let option = false;


    return (
        // JSX fragment <>...</>
        <>
            <h6> All rights are reserved @CopyRight 2024.</h6>
            <a href={option ? url : url2}> Visit page</a>
            1.{url}
            2. {url2}
        </>

    );

}
export default Footer;