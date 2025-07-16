
function Contact() {

    const styles = {
        mainDiv:{
            minHeight: "75vh",
            padding: "0px 8px",
            marginBottom: "auto",
            textAlign: "center",
            // backgroundColor: "rgb(28, 28, 28)",
            background: `
            radial-gradient(rgb(241, 241, 241, 0.5), rgb(100, 100, 100, 0.25)),
            repeating-linear-gradient(-10deg,
            rgba(30, 80, 80, 0.55) 2.5% 7.5%,
            rgba(28, 28, 28, 0.1) 7.5% 12.5%
            ),
            repeating-linear-gradient(10deg,
            rgba(30, 120, 120, 0.55) 2.5% 7.5%,
            rgba(28, 28, 28, 0.1) 7.5% 12.5%
            ),
            rgb(28, 28, 28)`,
            color: "whitesmoke",
            fontFamily: "sans-serif",
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>If you are in need of my skills or looking to network,<br /> please contact me by email and I'll try and get back to you as soon as I can.</p>
            <p><strong>Email:</strong> <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=isaiah1hansen@gmail.com" target="_blank" style={styles.a}>isaiah1hansen@gmail.com</a></p>
        </div>
    )
}

export default Contact