import aboutMeImage from "../assets/images/about.jpeg";
import aboutBackgroundImage from "../assets/images/About_background.jpg"

function About() {

    const styles = {
        mainDiv:{
            position: "relative",
            minHeight: "75vh",
            margin: "0px",
            padding: "1px 8px",
            textAlign: "center",
            background: `linear-gradient(rgba(241, 241, 241, 0) 0%, rgba(241, 241, 241, 1) 100%), url(${aboutBackgroundImage}) center`,
        },
        subDiv:{
            display: "inline-block",
        },
        flexDiv:{
            margin: "5px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
        },
        flexDiv2:{
            margin: "5px 0px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        },
        hText:{
            fontFamily: 'sans-serif',
        },
        img:{
            width: "90%",
            display: "inline",
        },
        imgDiv:{
            maxWidth: "400px",
        },
        p:{
            textAlign: "left",
            display: "inline",
            maxWidth: "600px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        },
        
    }

    const currentDateObj = new Date(Date.now());

    return (
        <div style={styles.mainDiv}>
            <h1 style={styles.hText}>About Me</h1>
            <div>
                <div style={styles.flexDiv}>
                    <div style={styles.imgDiv}>
                        <img src={aboutMeImage} style={styles.img} alt="Image of the developer of this portfolio website"/>
                    </div>
                    <div style={styles.flexDiv2}>
                        <div style={styles.subDiv}>
                            <h2 style={styles.hText}>Name: Isaiah Hansen</h2>
                            <h3 style={styles.hText}>Age: {(currentDateObj.getFullYear() - 2006) + Math.ceil((currentDateObj.getMonth() / 12) - (2 / 12))}</h3>
                        </div>
                        <p style={styles.p}>
                            I Have been interested in programing since about 12 years old. Mostly self-taught up until 19 years old when I attended the SMU programming bootcamp. 
                            Experienced front-end web developement, specializing in building interactive and responsive user interfaces.
                            Proficient in HTML, CSS, JavaScript, and modern frameworks such as React and TypeScript. 
                            Demonstrated ability to contribute to collaborative projects with strong problem-solving skills and attention to code quality, including comprehensive use of Bootstrap.
                            Adept at leveraging version control systems like Git and working effectively with development tools such as Visual Studio Code and Postman.
                            Successfully led and executed key roles on project teams, including full page structuring and responsive design integration.
                            Recognized for clear code documentation and implementation in web development projects.
                           {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Completed extensive web development training through SMU's Full Stack Web Development Boot Camp and supplemental coursework in JavaScript programming.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
