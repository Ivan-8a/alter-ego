"use client"

import styles from './CallToAction.module.css';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

const CallToAction = () => {
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
const router = useRouter();

useEffect(() => {
    const getUser = async () => {
        const {data: {user} } = await supabase.auth.getUser();
        setUser(user);
        setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        }
    );

    return () => subscription.unsubscribe();
},[]);

const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(loading) return; //Evita clicks mientras carga

    if(user) {
        router.push('./checkout');
    } else {
        router.push('./login');
    }
}

    return(
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        ¿Listo para transformar tu negocio?
                    </h2>
                    <p className={styles.subtitle}>
                        Descubre como conectar autenticamente con tus clientes
                    </p>
                    <a 
                        className={styles.ctaButton}
                        onClick={handleCtaClick}
                        style={{opacity: loading ? 0.7 : 1, cursor: loading? 'wait':'pointer'}}

                    >
                        {loading ? 'Cargando...': 'Comienza ahora'}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CallToAction