"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./checkout.module.css";
import type { User } from '@supabase/supabase-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login?redirect=/checkout");
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
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1S2kkyKsW9IYxJas8jSjmBKQ',
          userId: user.id,
        }),
      });

      const { sessionId } = await response.json();

      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId
      });
      if(error) {
        console.error('Error redirecting to checkout:', error);
      }
    }catch(error) {
      console.error('Error creating checkout session:', error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  if(loading){
    return(
      <div className={styles.loadingContainer}>
        <h1>
          Cargando...
        </h1>
      </div>
    )
  }

  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
        
      <p className={styles.welcomeMessage}>
        ¡Bienvenido, {user?.user_metadata?.username || user?.email}!
      </p>
      <div className={styles.productCard}>
        <h2 className={styles.productTitle}>Curso alter-ego</h2>
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
    </div>
  )
};

export default Checkout;
