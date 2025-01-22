

function Footer() {

    const styles = {
        footer: {
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "rgb(128, 128, 128)",
            padding: "10px 0px",
            margin: "15px 0px 0px 0px",
            textAlign: "center"
        }
    };

    return (
        <footer style={styles.footer}>
            <p>This site was made by Isaiah Hansen using React</p>
        </footer>
    )
};

export default Footer