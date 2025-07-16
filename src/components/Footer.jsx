

function Footer() {

    const styles = {
        footer: {
            width: "100%",
            height: "10vh",
            background: "linear-gradient(rgb(128, 128, 128) 0%, rgb(78, 78, 78) 100%)",
            padding: "10px 0px",
            textAlign: "center"
        },
        p:{
            margin:"6px 0px"
        },
        a:{
            color: "rgb(0, 0, 0, 0.5)",
            margin: "6px 20px",
            transition: "color 0.3s ease-out",
        },
        i:{
            fontSize: "40px",
        }
    };

    const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/KeelerZoroth"
    },
    {
      name: "fab fa-linkedin",
      link: "www.linkedin.com/in/isaiah-hansen-a23936311"
    },
  ]

    return (
        <footer style={styles.footer}>
            {icons.map(icon =>
                (
                    <a href={icon.link} style={styles.a} key={icon.name} target="_blank" rel="noopener noreferrer"><i style={styles.i} className={icon.name}></i></a>
                )
            )}
            <p style={styles.p}>This site was made by Isaiah Hansen using React</p>
        </footer>
    )
};

export default Footer