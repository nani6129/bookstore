import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const hasNavigated = useRef(false); // ✅ prevents double run

  useEffect(() => {
    if (hasNavigated.current) return;

    hasNavigated.current = true;

    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 BookStore</h1>
      <p style={styles.subtitle}>Welcome to your favorite book app</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #ff512f, #dd2476)",
    color: "white",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "10px",
  },
  loader: {
    marginTop: "20px",
    width: "40px",
    height: "40px",
    border: "5px solid white",
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Splash;