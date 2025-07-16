
function Error() {

    const styles = {
        mainDiv:{
            minHeight: "100vh",
            padding: "1px 8px",
            background: "radial-gradient(rgb(241, 241, 241) -25%, rgb(100, 100, 100))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }


    return (
        <div style={styles.mainDiv}>    
            <h1>Hmm... Something wrong happend :[</h1>
        </div>
    )
}

export default Error