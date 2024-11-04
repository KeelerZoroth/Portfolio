import aboutMeImage from "../assets/images/about.jpeg";


function About() {

    const styles = {
        mainDiv:{
            padding: "1px 8px",
            textAlign: "center",
            backgroundColor: "rgb(241 241 241)",
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
            width: "100%",
            display: "inline",
        },
        imgDiv:{
            maxWidth: "400px",
        },
        p:{
            display: "inline",
            maxWidth: "600px",
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
                        <p style={styles.p}>I have been intrested in programing since about 12 years old. I am a mostly a self-taught up untill 19 years old when I atended the SMU programming bootcamp.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About