import Nav from "./Nav"

function Header() {
    const styles = {
        header: {
            backgroundColor: "rgba(17, 64, 132, 0.94)",
            padding: "0px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        h1:{
            color: "white",
            margin: "0px 10px",
            fontWeight: "100",
            fontStyle: "normal",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
        }
    }

    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>Isaiah</h1>
            <Nav/>
        </header>
    )
};

export default Header