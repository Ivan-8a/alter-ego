"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { loadStripe } from '@stripe/stripe-js';
import styles from './checkout.module.css';

// Cargar Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login?redirect=/checkout');
        return;
      }
      
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleCheckout = async () => {
    if (!user) return;

    setCheckoutLoading(true);

    try {
      // Crear sesión de checkout
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1234567890', // Reemplaza con tu Price ID real de Stripe
          userId: user.id,
        }),
      });

      const { sessionId } = await response.json();

      // Redirigir a Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <p className={styles.welcomeMessage}>
        ¡Bienvenido, {user?.user_metadata?.username || user?.email}!
      </p>
      
      <div className={styles.productCard}>
        <h3 className={styles.productTitle}>Curso Alter-Ego</h3>
        <p className={styles.productDescription}>
          Descubre como conectar auténticamente con tus clientes
        </p>
        
        <div className={styles.checkoutSection}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>$99.00 USD</span>
            <span className={styles.priceNote}>pago único</span>
          </div>
          
          <button
            onClick={handleCheckout}
            disabled={checkoutLoading}
            className={styles.checkoutButton}
          >
            {checkoutLoading ? 'Procesando...' : 'Comprar ahora'}
          </button>
        </div>
      </div>

      <div className={styles.guaranteesSection}>
        <ul className={styles.guaranteesList}>
          <li className={styles.guaranteeItem}>
            <span className={styles.checkIcon}>✅</span>
            Pago seguro con Stripe
          </li>
          <li className={styles.guaranteeItem}>
            <span className={styles.checkIcon}>✅</span>
            Garantía de devolución de 30 días
          </li>
          <li className={styles.guaranteeItem}>
            <span className={styles.checkIcon}>✅</span>
            Acceso inmediato después del pago
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPage;