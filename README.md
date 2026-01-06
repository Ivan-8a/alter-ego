# alter-ego

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

> Una Landing Page moderna y optimizada para la promoción y venta del curso de [Tema del curso]. Desarrollada con Next.js enfocada en la conversión y experiencia de usuario.

## 🚀 Características

La página está estructurada en secciones modulares para facilitar el mantenimiento:

- **Hero Section:** Portada de alto impacto con llamada a la acción (CTA) dirigida.
- **Sección del Curso:** Desglose del contenido o currículo del curso.
- **Integración de Video:** Módulo para mostrar avances o introducciones visuales.
- **Call To Action (CTA):** Secciones estratégicas para redirigir al usuario a la compra o suscripción.
- **Diseño Responsivo:** Adaptado a móviles y escritorio utilizando CSS Modules.

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules (`.module.css`)
- **Componentes:** Arquitectura basada en componentes funcionales.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura organizada por secciones:



```bash
/src
  /app
    page.tsx        # Página principal (Home)
    page.module.css # Estilos específicos del Home
  /components
    /layout
      Navbar.tsx    # Barra de navegación global
    /sections
      Hero.tsx      # Sección principal
      Course.tsx    # Información del curso
      Video.tsx     # Reproductor o embed de video
      CallToAction.tsx
      Footer.tsx
