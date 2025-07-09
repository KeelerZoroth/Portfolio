
function Resume() {


    const styles = {
        mainDiv:{
            minHeight: "65vh",
            padding: "10px 8px",
            textAlign: "left",
            backgroundColor: "rgb(241, 241, 241)"
        },
        downloadLinkDiv:{
            width: "100px",
            margin: "8px 5px",
            marginLeft: "auto",
            backgroundColor: "rgb(180, 180, 180)",
            border: "2px solid rgba(0, 0, 0, 0.3)",
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