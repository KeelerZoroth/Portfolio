
function Resume() {


    const styles = {
        mainDiv:{
            minHeight: "75vh",
            padding: "10px 20px",
            textAlign: "left",
            // backgroundColor: "rgb(41, 41, 41)",
            background: `
                linear-gradient(135deg,
                    rgba(230, 120, 120, 0.25) 0% 15%,
                    rgba(41, 41, 41, 0.1) 85% 100%
                ),
                linear-gradient(105deg,
                    rgba(41, 41, 41, 0.1) -5% 5%,
                    rgba(130, 0, 0, 0.55) 5% 15%,
                    rgba(41, 41, 41, 0.1) 15% 25%,
                    rgba(130, 0, 0, 0.45) 25% 35%,
                    rgba(41, 41, 41, 0.1) 35% 45%,
                    rgba(130, 0, 0, 0.35) 45% 55%,
                    rgba(41, 41, 41, 0.1) 55% 65%,
                    rgba(130, 0, 0, 0.25) 65% 75%,
                    rgba(41, 41, 41, 0.1) 75% 85%,
                    rgba(130, 0, 0, 0.15) 85% 95%,
                    rgba(41, 41, 41, 0.1) 95% 105%
                ),
                rgb(41, 41, 41)`,
            color: "white",
        },
        downloadLinkDiv:{
            width: "100px",
            margin: "8px 5px",
            marginLeft: "auto",
            backgroundColor: "rgb(100, 100, 100)",
            border: "2px solid rgba(0, 0, 0, 0.65)",
            borderRadius: "5px"
        },
        downloadLink:{
            width: "100%",
            textDecoration: "none",
            color: "rgb(200, 255, 255)"
        },
        downloadLinkInnerDiv:{
            padding: "3px 0px",
            textAlign: "center",
        },
    }


    return (
        <div style={styles.mainDiv} className="resume-main-div">    
            <div style={styles.downloadLinkDiv}>
                <a style={styles.downloadLink} href="/Public Resume.docx" download>
                        <div style={styles.downloadLinkInnerDiv}>
                            Download Resume
                        </div>
                    </a>
            </div>
            <div>
                <h2>Technical Skills:</h2>
                <p><strong>Technical Languages:</strong><br/>
                 HTML, CSS, JavaScript, TypeScript, Python</p>
                <p><strong>Tools & Technologies:</strong><br/>
                Visual Studio Code, Postman, Chrome DevTools, Bootstrap, jQuery, Git, GitHub, Node.js, npm, React.js, Express.js, PostgreSQL (with Sequelize), MongoDB (with Mongoose), GraphQL, Cypress</p>
            </div>
            <div>
                <h2>Education:</h2>
                <p>
                   <strong> Full Stack Web Development Boot Camp Certificate: SMU, Online </strong> <br />
                    An intensive program focused on gaining technical programming skills in HTML, CSS, JavaScript, Node.js, npm, Typescript, SQL, MongoDB, Express, and ReactJS.
                </p>
            </div>
        </div>
    )
}

export default Resume