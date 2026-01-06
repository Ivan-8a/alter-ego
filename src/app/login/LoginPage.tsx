"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./login.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"

const prettyAuthError = (raw: string) => {
  const msg = raw.toLowerCase();
  if (msg.includes("invalid login credentials"))
    return "Credenciales inválidas.";
  if (msg.includes("email not confirmed"))
    return "Correo no verificado. Revisa tu bandeja de entrada.";
  if (msg.includes("user already registered"))
    return "Este correo ya está registrado.";
  if (msg.includes("password"))
    return "La contraseña no cumple los requisitos o es incorrecta.";
  return raw;
};

const LoginPage = ({ redirectTo }: { redirectTo: string }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  useEffect(() =>{
    const checkUser = async () => {
      const {data: {user}} = await supabase.auth.getUser();
      if(user) {
        router.push(redirectTo);
      }
    };

    checkUser();
  }, [router, redirectTo]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Completa correo y contraseña");
      return;
    }

    if(isRegister && form.password !== form.confirmpassword){
            toast.error("Las contraseñas no coinciden");
            return;
        }

    setLoading(true);

    try {
      if (isRegister) {
        const { data, error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: {
              username: form.username,
            },
          },
        });

        if (error) {
          toast.error(prettyAuthError(error.message));
        } else {
          const needsEmailConfirm = !data.session;
          toast.success(
            needsEmailConfirm
              ? "Cuenta creada ✅. Revisa tu correo para confirmar tu cuenta."
              : "Cuenta creada y sesión iniciada 🎉"
          );
          setForm({
            email: "",
            password: "",
            confirmpassword: "",
            username: "",
          });

          if (!needsEmailConfirm) {
            router.push(redirectTo);
          }
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });

        if (error) {
          toast.error(prettyAuthError(error.message));
        } else {
          toast.success("Inicio de sesion exitoso");
          setForm({
            email: "",
            password: "",
            confirmpassword: "",
            username: "",
          });
          router.push(redirectTo)
        }
      }
    } catch (err: any) {
      toast.error("Ocurrio un error inesperado. Intenta denuevo");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {isRegister ? "Crear cuenta" : "Iniciar sesion"}
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isRegister ? (
            <input
              type="text"
              name="username"
              placeholder="Nombre"
              value={form.username}
              onChange={handleChange}
              className={styles.input}
              required
            />
          ) : null}
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
          {isRegister ? (
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirmar contraseña"
              value={form.confirmpassword}
              onChange={handleChange}
              className={styles.input}
              required
            />
          ) : null}
          <button type="submit" className={styles.button} disabled={loading}>
            {loading
              ? "Procesando..."
              : isRegister
              ? "Registrarse"
              : "Ingresar"}
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
  );
};

export default LoginPage;