
function Contact() {

    const styles = {
        mainDiv:{
            padding: "50px 8px",
            marginBottom: "auto",
            textAlign: "center",
            backgroundColor: "rgb(28, 28, 28)",
            color: "whitesmoke",
            fontFamily: "sans-serif",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        a:{
            color: "inherit",
        }
    }


    return (
        <div style={styles.mainDiv}>    
            <h1>Contact</h1>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/isaiah-hansen-a23936311" target="_blank" style={styles.a}>Isaiah Hansen</a></p>
            <p><strong>Github:</strong> <a href="https://github.com/KeelerZoroth" target="_blank" style={styles.a}>KeelerZoroth</a></p>
            <p><strong>Email:</strong> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=isaiah1hansen@gmail.com" target="_blank" style={styles.a}>isaiah1hansen@gmail.com</a></p>
        </div>
    )
}

export default Contact