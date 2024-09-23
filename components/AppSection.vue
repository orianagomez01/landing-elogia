<template>
  <section class="w-full max-h-screen flex md:py-20">
    <div :class="[
      'grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-4',
      reverse ? 'flex-row-reverse' : ''
    ]">

<!-- Columna de texto centrado -->
        <div v-if="secondSection" class="col-span-2 mt-10 md:col-span-3">
          <p class="text-white font-semibold text-center text-5xl">
            {{ title }}
        </p>
        </div>

      <!-- Columna de texto -->
      <div :class="[
        'row-span-2 md:row-span-3',
        reverse ? 'order-last' : ''
      ]">
        <p v-if="!secondSection" class="font-medium text-center text-2xl mt-10 md:text-5xl md:text-left">
          {{ title }}
        </p>

        <p class="text-center font-light mb-3 md:text-left">
          {{ subtitle }}
        </p>
        <p class="text-center px-auto md:max-w-xl md:text-left">
          {{ description }}
        </p>
        <p class="text-center px-auto py-6 md:max-w-xl md:text-left">
          {{ subheading }}
        </p>
      </div>

      <!-- Columna de imagen -->
      <div class="row-span-3 row-start-3 w-full h-full md:row-span-3">
        <div class="flex justify-center items-center mt-0 mx-0">
          <!-- Si showSingleImage es true, se muestra una sola imagen -->
          <img
            v-if="showSingleImage"
            :src="images[0]"
            alt="Single Image"
            class="w-10/12 h-10/12 mx-auto md:w-8/12 md:h-8/12 md:mx-0"
          />
          <!-- Si showSingleImage es false, se muestran dos imágenes -->
          <div v-else class="flex flex-col space-x-0 md:flex-row md:space-x-4">
            <img
              v-for="(image, index) in images.slice(0, 2)"
              :key="index"
              :src="image"
              :alt="`Image ${index + 1}`"
              class="w-12/12 h-12/12 mx-auto md:w-5/12 md:h-5/12 md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: false
  },
  images: {
    type: Array,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  },
  showSingleImage: {
    type: Boolean,
    default: true
  },
    secondSection: {
    type: Boolean,
    default: true
  }
})


</script>