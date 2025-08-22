"use client";

import { useState } from "react";
import styles from "./login.module.css"

const LoginPage = () =>{
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState({email: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(isRegister) {
            console.log("Registro", form);
        } else {
            console.log("Inicio:", form)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    {isRegister ? "Crear cuenta" : "Iniciar sesion"}
                </h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        {isRegister ? "Registrarse" : "ingresar"}
                    </button>
                </form>
                <p className={styles.toggle}>
                    {isRegister ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                    <span onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Inicia sesión" : "Registrate"}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default LoginPage