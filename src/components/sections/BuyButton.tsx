"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

interface BuyButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  loadingText?: string;
  redirectTo?: string; // Por si quieres redirigir a algo diferente a /checkout
}

const BuyButton = ({ 
  children, 
  className = '', 
  style = {}, 
  loadingText = 'Cargando...',
  redirectTo = '/checkout'
}: BuyButtonProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Obtener usuario actual
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (loading) return; // Evitar clicks mientras carga

    if (user) {
      // Usuario autenticado, ir al destino
      router.push(redirectTo);
    } else {
      // Usuario no autenticado, ir a login con redirect
      router.push(`/login?redirect=${redirectTo}`);
    }
  };

  return (
    <a 
      href={redirectTo} // Fallback para SEO
      onClick={handleClick}
      className={className}
      style={{ 
        ...style,
        opacity: loading ? 0.7 : 1,
        cursor: loading ? 'wait' : 'pointer'
      }}
    >
      {loading ? loadingText : children}
    </a>
  );
};

export default BuyButton;