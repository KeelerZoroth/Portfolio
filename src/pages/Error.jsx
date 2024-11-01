
function Error() {

    const styles = {
        mainDiv:{
            padding: "1px 8px",
            textAlign: "center",
            backgroundColor: "rgb(241 241 241)",
        }
    }


    return (
        <div style={styles.mainDiv}>    
            <p>Something wrong happend :[</p>
        </div>
    )
}

export default Error