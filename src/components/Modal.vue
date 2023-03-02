<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition
      enter-from-class="opacity-0 scale-125"
      enter-to-class="opacity-100 scale-100"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div class="modalMask" v-if="show">
      <div class="modalContainer">
        <div>
          <slot>Default body</slot>
        </div>

        <footer class="mt-3 pt-2 border-t text-sm">
          <slot name="footer">
            <button @click="$emit('close')" class="bg-gray-300 rounded-3xl py-2 px-3 hover:bg-gray-400">Default Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modalMask {
  margin: 0;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: grid;
  place-items: center;
}

.modalContainer {
  background: white;
  padding: 2rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

</style>