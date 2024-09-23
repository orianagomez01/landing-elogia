<script setup lang="ts">
import CaptureAudience from "./capture-audience.vue";
import presaleEvent from "./presale-event.vue";
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
 <presaleEvent/>

  <!-- SECTION 2 -->
  <div class="default-section-p bg-[#D15D52] text-white ">
    <AppSection
      reverse 
      title="OBTENÉ LOS NUEVOS STICKERS"
      description="Disfruta de stickers sobre maquillaje que te permite favorecer la identidad de tu marca."
      :images="['/img/stickers00.png']"
      :showSingleImage="true"
      :secondSection="false"
    />
  </div>

  <!-- SECTION 3 -->
  <div class="default-section-p">
<CaptureAudience />
</div>

<div class="default-section-p bg-[#252525] text-white">
    <AppSection
      title="LOS MEJORES FILTROS EN REDES SOCIALES"
      description="Cientos de Influencers y marcas de maquillaje utilizan los filtros para ofrecer mejor contenido a sus seguidores ya que les permite conectar mejor con su audiencia."
      :images="['/img/stickers03.png']"
      :showSingleImage="true"
      :secondSection="false"
    />
  </div> 

  
<div class="default-section-p bg-[#252525] text-white">
    <AppSection
      title="COMUNICA MEJOR"
      description="Logran diversidad en tus stories, posts."
      subheading="Incrementan el número de vistas y comentarios que reciben tus publicaciones."
      :images="['/img/stickers05.png', '/img/stickers06.png']"
      reverse
      :showSingleImage="false"
      :secondSection="true"
    />
  </div> 

 <!--  <div class="default-section-p bg-[#252525] text-white">
    <ComunicateBetter
      title="LOS MEJORES FILTROS EN REDES SOCIALES"
      description="Cientos de Influencers y marcas de maquillaje utilizan los filtros para ofrecer mejor contenido a sus seguidores ya que les permite conectar mejor con su audiencia."
      :images="require('~/assets/img/stickers05.png')"
    />
  </div>  -->


</template>
