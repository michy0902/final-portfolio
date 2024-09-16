<template>
  <div class="h-screen bg-bluishGrey p-6 flex flex-col space-y-4">
    <!-- Navigation Bar -->
    <div
      class="flex items-center justify-between bg-bluishGrey-light rounded-lg h-12 p-4">
      <div class="text-lg text-bluishGrey-dark">michy's portfolio</div>
      <div class="space-x-6">
        <a href="#" class="text-bluishGrey-dark hover:text-black">home</a>
        <a href="#" class="text-bluishGrey-dark hover:text-black">about</a>
        <a href="#" class="text-bluishGrey-dark hover:text-black">contact</a>
      </div>
    </div>

    <!-- Main Grid Layout -->
    <div class="grid grid-cols-4 grid-rows-2 gap-4">
      <!-- Left Main Section (Text and Image) -->
      <div
        class="col-span-2 row-span-2 bg-bluishGrey-light p-6 rounded-lg flex flex-col justify-between">
        <h1 class="text-4xl font-bold text-bluishGrey-dark leading-tight">
          Let’s create dance floor <span class="italic">magic</span> for your
          special day
        </h1>
        <div class="flex justify-center mt-4">
          <img
            src="@/assets/images/icon.jpg"
            alt=""
            class="rounded-lg w-full h-80 object-cover" />
        </div>
      </div>

      <!-- Right Top Image Section -->
      <div class="bg-bluishGrey-light p-4 rounded-lg">
        <img
          src="@/assets/images/💙.jpg"
          alt="Event Image"
          class="rounded-lg w-full h-52 object-cover" />
        <p class="mt-2 text-center text-lg">michy's pic</p>
      </div>

      <!-- Events Section -->
      <div class="bg-bluishGrey-light p-4 rounded-lg flex flex-col space-y-2">
        <h2 class="text-lg font-semibold text-center">Projects</h2>
        <ul class="space-y-2">
          <li class="border-b border-bluishGrey-dark pb-1">project 1</li>
          <li class="border-b border-bluishGrey-dark pb-1">project 2</li>
          <li class="border-b border-bluishGrey-dark pb-1">project 3</li>
        </ul>
      </div>

      <!-- About Section -->
      <div class="bg-bluishGrey-light p-6 rounded-lg">
        <p class="text-sm text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iusto
          debitis error ab placeat enim praesentium recusandae fugit, cupiditate
          sint animi rerum veritatis quam soluta dolore, voluptates ullam
          facere? Nam?
        </p>
      </div>

      <!-- Contact Section -->
      <div
        class="bg-bluishGrey-light p-6 rounded-lg flex justify-center items-center">
        <button @click="toggleDarkMode" class="bg-bluishGrey-dark text-white py-2 px-4 rounded-lg">
          switch mode
        </button>
      </div>
    </div>

    <!-- Footer Social Media Links -->
    <div class="flex justify-center space-x-6 mt-4">
      <a href="#" class="text-bluishGrey-dark hover:text-black">Instagram</a>
      <a href="#" class="text-bluishGrey-dark hover:text-black">Twitter</a>
      <a href="#" class="text-bluishGrey-dark hover:text-black">Pinterest</a>
    </div>

    
  </div>
</template>


<script>
export default {
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle('dark', this.isDark);
    }
  }
};
</script>

<style scoped>
/* Dark mode styles */
.dark .bg-bluishGrey {
  background-color: #1a1a1a;
}
.dark .bg-bluishGrey-light {
  background-color: #333333;
}
.dark .text-bluishGrey-dark {
  color: #eaeaea;
}
</style>
