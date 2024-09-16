<script setup lang="ts">
import CaptureAudience from "./capture-audience.vue";
</script>

<template>
  <!-- HERO SECTION  -->

  <AppHero
    title="ELOGIA"
    subtitle="SOCIAL MEDIA & CONTENT"
    description="¡Hacete viral en tus redes sociales con nuestros stickers y filtros personalizados!"
    image="/img/hero-image.png"
  />

  <!-- SECTION 1 COUNTER -->

  <!-- SECTION 2 -->
  <div class="default-section-p bg-[#D15D52] text-white ">
    <AppSection
      title="OBTENÉ LOS NUEVOS STICKERS"
      description="Disfruta de stickers sobre maquillaje que te permite favorecer la identidad de tu marca."
      images="/img/stickers00.png"
    />
  </div>

  <!-- SECTION 3 -->
  <div class="default-section-p">
<CaptureAudience />
</div>

<div class="default-section-p bg-[#252525] text-white ">
    <AppSection
      title="LOS MEJORES FILTROS EN REDES SOCIALES"
      description="Cientos de Influencers y marcas de maquillaje utilizan los filtros para ofrecer mejor contenido a sus seguidores ya que les permite conectar mejor con su audiencia."
      images="/img/stickers03.png"
    />
  </div> 


</template>
