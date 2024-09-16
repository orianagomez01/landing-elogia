<!-- PAGINA PRINCIPAL -->
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const toggle = ref(true);
</script>

<template>
  <button @click="toggle = !toggle" class="text-black absolute top-20 right-40 bg-slate-500 p-2 rounded-full z-20">Toggle</button>
  <div v-if="toggle" class="flex items-center justify-center w-screen h-screen max-h-screen">
    <div
      class="absolute bg-red-vector bg-no-repeat bg-cover w-screen h-4/5 -z-50 inset-x-0 bottom-0 md:w-full md:max-h-[90%] lg:inset-x-0 lg:bottom-0 lg:w-full lg:max-h-4/6"
    ></div>
    <div class="w-1/2 p-24 self-start">
      <h1
          class="font-medium text-center text-4xl mt-10 md:text-left md:text-6xl"
        >
          {{ title }}
        </h1>
        <h2 class="text-center font-light mb-3 md:text-left md:whitespace-pre">
          {{ subtitle }}
        </h2>
        <p class="text-center px-auto md:max-w-xl md:text-left">
          {{ description }}
        </p>
    </div>
    <div class="w-1/2">
      <img
            :src="image"
            alt="Picture of women using filters on Instagram"
            class="w-10/12 h-10/12 mx-auto md:w-8/12 md:h-8/12"
          />
    </div>
  </div>

  <div v-else="toggle" class="w-screen max-h-screen">
    <div
      class="relative grid grid-cols-1 grid-rows-1 gap-4 place-items-center md:grid-cols-6 h-screen w-full"
    >
      <div
        class="absolute bg-red-vector bg-no-repeat bg-cover w-screen h-4/5 -z-50 inset-x-0 bottom-0 md:w-full md:max-h-[90%] lg:inset-x-0 lg:bottom-0 lg:w-full lg:max-h-4/6"
      ></div>
      <div
        class="col-start-1 row-start-16 md:col-span-3 md:row-span-5 md:pl-20 self-start md:pt-20"
      >
        <h1
          class="font-medium text-center text-4xl mt-10 md:text-left md:text-6xl"
        >
          {{ title }}
        </h1>
        <h2 class="text-center font-light mb-3 md:text-left md:whitespace-pre">
          {{ subtitle }}
        </h2>
        <p class="text-center px-auto md:max-w-xl md:text-left">
          {{ description }}
        </p>
      </div>
      <div
        class="col-span-3 row-span-3 col-start-1 row-start-3 my-auto md:col-span-2 md:row-span-5 md:col-start-4"
      >
        <div class="justify-center items-center mt-0 mx-0">
          <img
            :src="image"
            alt="Picture of women using filters on Instagram"
            class="w-10/12 h-10/12 mx-auto md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
