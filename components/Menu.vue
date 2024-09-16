  <template>
  <div class="fixed top-0 z-10 w-full">
    <nav class="bg-gray-100 dark:bg-gray-900 p-4 md:p-2p-4 md:p-2">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <NuxtLink to="/" class="flex items-center space-x-4 rtl:space-x-reverse ">
      <img src="/assets/elogia-logo.svg" class="h-16" alt="Elogia Logo" />
    </NuxtLink>
    <!-- version responsive -->
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <IconsList class="w-5 h-5" aria-hidden="true" />
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NuxtLink to="/" class="block py-2 px-3 text-black  rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" aria-current="page">STICKERS</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="block py-2 px-3 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" aria-current="page">FILTROS</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="block py-2 px-3 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" aria-current="page">CONTACTO</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>
