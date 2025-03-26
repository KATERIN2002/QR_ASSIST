import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
import { base64Logo } from "./logoBase64";
// import "../styles.css"

export const QRCodeDisplay = () => {
  const [qrString, setQrString] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQR = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/qr/generateQR"
        );
        setQrString(response.data.url.trim()); // Limpiar datos
      } catch (error) {
        console.error("Error fetching QR code:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQR();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Text style={styles.loadingText}>Generando tu código QR...</Text>
          <ActivityIndicator size="large" color="#2D89EF" />
        </>
      ) : (
        <>
          <Text style={styles.header}>📌 Tu Código de Asistencia</Text>
          <Text style={styles.subText}>
            Escanea este código para registrar tu asistencia en el sistema.
          </Text>
          <View style={styles.qrContainer}>
            <QRCode
              value={qrString}
              size={250}
              color="#000"
              backgroundColor="white"
              logo={{ uri: base64Logo }} // Reemplaza con la URL del logo válido
              logoSize={50}
              logoBackgroundColor="white"
            />
          </View>
          <Text style={styles.footerText}>
            📲 Muestra este código en la entrada para validar tu asistencia.
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F6FB",
    paddingHorizontal: 20,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2D89EF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#2D89EF",
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  qrContainer: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginTop: 15,
    fontStyle: "italic",
  },
});
