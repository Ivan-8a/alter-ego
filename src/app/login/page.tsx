"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"
import styles from "./login.module.css"

const LoginPage = () =>{
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState({email: "", password: ""});
    const [error, setError] =useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if(isRegister) {
            const {data, error} = await supabase.auth.signUp({
                email: form.email,
                password: form.password,
            })

            if(error) setError(error.message);
            else console.log("Usuario registrado:", data);
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: form.email,
                password: form.password,
            });

            if(error) setError(error.message);
            else console.log("Sesion iniciada", data);
        }
        setLoading(false)
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
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? "Procesando..." : isRegister ? "Registrarse": "Ingresar"}
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