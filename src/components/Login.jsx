export default function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Iniciar Sesión</h2>

        <form style={styles.form}>
          <input 
            type="text" 
            placeholder="Usuario" 
            style={styles.input}
          />

          <input 
            type="password" 
            placeholder="Contraseña" 
            style={styles.input}
          />

          <button style={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f3f3",
  },
  box: {
    width: "320px",
    padding: "25px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  }
}
