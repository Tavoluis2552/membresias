<script setup>
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
  <Head title="Gym T&J" />

  <div class="bg-white text-gray-800 dark:bg-zinc-900 dark:text-gray-100">
    <!-- Header -->
    <header class="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <div class="text-2xl font-bold">Gym X</div>
      <div class="space-x-4">
        <Link :href="route('login')" class="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800">
          Iniciar sesión
        </Link>
        <Link :href="route('register')" class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Registro
        </Link>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="flex justify-center space-x-8 py-4 bg-gray-100 dark:bg-zinc-800">
      <a href="#inicio" class="hover:text-orange-500">Inicio</a>
      <a href="#quienes-somos" class="hover:text-orange-500">¿Quiénes somos?</a>
      <a href="#personal" class="hover:text-orange-500">Personal</a>
      <a href="#planes" class="hover:text-orange-500">Planes</a>
    </nav>

    <!-- Sección Inicio (puedes usarla como héroe) -->
    <section id="inicio" class="text-center py-20 bg-cover bg-center" style="background-image: url('/images/gym-cover.jpg')">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Gym X</h1>
      <p class="text-lg max-w-xl mx-auto">Entrena, progresa y alcanza tu mejor versión con nosotros.</p>
    </section>

    <!-- ¿Quiénes somos? -->
    <section id="quienes-somos" class="py-16 px-6 bg-gray-50 dark:bg-zinc-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">¿Quiénes somos?</h2>
        <p class="text-lg">Somos un gimnasio comprometido con tu bienestar físico y mental. Nuestro equipo te acompañará en cada paso hacia tus objetivos.</p>
      </div>
    </section>

    <!-- Instalaciones -->
    <section class="py-16 px-6 bg-white dark:bg-zinc-900 text-center">
      <h2 class="text-3xl font-bold mb-6">Instalaciones</h2>
      <!-- Carrusel placeholder -->
      <div class="flex justify-center items-center space-x-4">
        <button class="text-3xl">⬅️</button>
        <div class="w-3/5 h-64 bg-gray-200 dark:bg-zinc-700 flex items-center justify-center">
          <span>Imágenes de las instalaciones del gimnasio</span>
        </div>
        <button class="text-3xl">➡️</button>
      </div>
    </section>

    <!-- Personal -->
    <section id="personal" class="py-16 px-6 bg-gray-50 dark:bg-zinc-800">
      <h2 class="text-3xl font-bold text-center mb-10">Personal de entrenamiento</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="h-48 bg-gray-300 dark:bg-zinc-600 mb-4">FOTO</div>
          <p class="font-semibold">¡Entrena duro, vive mejor!</p>
        </div>
        <div class="text-center">
          <div class="h-48 bg-gray-300 dark:bg-zinc-600 mb-4">FOTO</div>
          <p class="font-semibold">Tu único límite eres tú</p>
        </div>
        <div class="text-center">
          <div class="h-48 bg-gray-300 dark:bg-zinc-600 mb-4">FOTO</div>
          <p class="font-semibold">No te rindas, mejora cada día</p>
        </div>
        <div class="text-center">
          <div class="h-48 bg-gray-300 dark:bg-zinc-600 mb-4">FOTO</div>
          <p class="font-semibold">¡Transforma tu cuerpo, transforma tu vida!</p>
        </div>
      </div>
    </section>

    <!-- Planes -->
    <section id="planes" class="py-16 px-6 bg-white dark:bg-zinc-900">
      <h2 class="text-3xl font-bold text-center mb-10">Planes de entrenamiento</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="border p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold mb-2">Plan Básico</h3>
          <p class="mb-2">Acceso libre a todas las máquinas.</p>
          <p class="font-bold text-orange-500">S/ 50 mensual</p>
        </div>
        <div class="border p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold mb-2">Plan Intermedio</h3>
          <p class="mb-2">Acceso + asesoramiento inicial.</p>
          <p class="font-bold text-orange-500">S/ 80 mensual</p>
        </div>
        <div class="border p-6 rounded-lg shadow text-center">
          <h3 class="text-xl font-bold mb-2">Plan Premium</h3>
          <p class="mb-2">Todo incluido + entrenador personal.</p>
          <p class="font-bold text-orange-500">S/ 120 mensual</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center text-sm bg-gray-100 dark:bg-zinc-800">
      <p>&copy; 2025 Gym T&J. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>