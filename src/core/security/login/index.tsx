import { StyleSheet, View } from "react-native";
import './styles.css'

export const LogIn = () => {
  return (
    <View style={styles.container}>
      <form method="POST">
        <h1>Bienvenido QR-assist</h1>
        <div>
          <input placeholder="Correo" required />
        </div>
        <div>
          <input type="password" placeholder="Contraseña" required />
        </div>
        <input type="submit" className="btn" value="Iniciar Sesión" />
      </form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
