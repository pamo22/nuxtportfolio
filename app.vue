<template>
  <div class="bg-c-offblack fg-c-offwhite min-h-screen">
    <header class="h-20 text-2xl lg:w-9/12 xl:w-7/12 w-11/12 mx-auto table">
      <span class="font-comfortaa p-3 align-middle table-cell">
        <span class="grid grid-cols-2">
          <span>
            <a href="/" class="font-bold">Home</a>
          </span>
          <span class="font-bold text-right">
              <a href="https://google.com">Résumé</a>
          </span>
        </span>
      </span>
    </header>
    <div class="w-11/12 xl:w-7/12 lg:w-9/12 mx-auto">
      <NuxtPage/>
    </div>
    <footer class=""></footer>
  </div>
</template>