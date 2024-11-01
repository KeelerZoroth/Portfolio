import aboutMeImage from "../assets/images/about.jpeg";


function About() {

    const styles = {
        mainDiv:{
            padding: "1px 8px",
            textAlign: "center",
            backgroundColor: "rgb(241 241 241)",
        },
        hText:{
            fontFamily: 'sans-serif',
        },
        img:{
            width: "100%"
        }
    }

    const currentDateObj = new Date(Date.now());

    return (
        <>
        <div style={styles.mainDiv}>
            <h1 style={styles.hText}>About Me</h1>
            <div>
                <div>
                    <img src={aboutMeImage} style={styles.img} alt="Image of the developer of this portfolio website"/>
                </div>

                <div>
                    <div>
                            <div>
                                <h2 style={styles.hText}>Name: Isaiah Hansen</h2>
                                <h3 style={styles.hText}>Age: {(currentDateObj.getFullYear() - 2006) + Math.ceil((currentDateObj.getMonth() / 12) - (2 / 12))}</h3>
                            </div>
                            
                            <p> I am a mostly a self-taught and have been intrested in programing since about 12 years old.
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About