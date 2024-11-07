const Footer = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.cadre}>
        <h3 style={styles.titre}>Disclaimer</h3>
        <p style={styles.texte}>
          Les œuvres et images sont présentées à des fins éducatives. Les droits
          d'auteur appartiennent à leurs détenteurs. Nous ne garantissons pas
          l'exactitude des informations.
        </p>
      </div>
      <div style={styles.copyright}>Copyright 2024</div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#00296B",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    height: "100vh",
    fontFamily: "monospace",
    color: "#000",
  },
  cadre: {
    backgroundColor: "#FFCD29",
    padding: "20px",
    borderRadius: "15px",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  titre: {
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  texte: {
    lineHeight: "1.5",
  },
  copyright: {
    backgroundColor: "#FFD60A",
    padding: "10px 20px",
    borderRadius: "10px",
    textAlign: "center" as const,
    fontFamily: "monospace",
  },
};

export default Footer;
