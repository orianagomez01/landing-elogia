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
images: {
    type: [String, Array],
    required: true
  },
})

</script>

<template>
<section class="w-full max-h-screen md:py-20">
  <div class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-4 ">
    
    <div class="row-span-2 md:row-span-3">
      <p class="font-medium text-center text-2xl mt-10 md:text-5xl md:text-left">
   {{ title }}
    </p>
    <p class="text-center font-light mb-3 md:text-left ">
   {{ subtitle }}
    </p>
    <p class="text-center px-auto md:max-w-xl md:text-left">
   {{ description.toString() }}
    </p>
    </div>

    <div class="row-span-3 row-start-3 w-full h-full md:row-span-3">
      <div class="flex justify-center items-center mt-0 mx-0">
        <img
          :src="images"
          alt="Picture of women using filters on Instagram" 
          class="w-10/12 h-10/12 mx-auto md:w-8/12 md:h-8/12 md:mx-0" />
       </div>
    </div>
</div>


</section>
</template> 
