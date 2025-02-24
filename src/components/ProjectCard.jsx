
// eslint-disable-next-line react/prop-types
function ProjectCard({title, image, url}) {

    const styles = {
        // containerDiv: {
        //     margin: "0px auto",
        //     display: "flex",
        //     justifyContent: "center",
        //     // flexShrink: "0",
        //     flexBias: "1"

        // },
        mainDiv:{
            color: "color: rgb(33 37 41)",
            border: "solid rgb(50, 50, 200) 3px",
            // margin: "5px",
            backgroundColor: "rgb(100, 100, 100)",
            textAlign: "center",
            display: "inline-block",
            width: "300px",
        },
        subDiv:{
            width: "100%",
            height: "100px",
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        imgDiv:{
            width: "100%",
            height: "200px",
            overflow: "hidden",
        },
        a:{
            color: "inherit",
            textDecoration: "inherit",
            width: "100%",
            height: "100%"
        },
        h1:{
            fontFamily: 'sans-serif',
            color: "color: rgb(33 37 41)",
            width: "100%",
        },
        img:{
            width: "100%",
            minHeight: "100%",
        },
    }

    return (
        <div style={styles.mainDiv}>
            <a style={styles.a} href={url} target="_blank">
                <div style={styles.imgDiv}>
                    <img src={image} style={styles.img} alt="Project thumbnail" />
                </div>
                <div style={styles.subDiv}>
                    <h1 style={styles.h1}>{title}</h1>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard