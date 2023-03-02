<script setup>
import Modal from "@/components/Modal.vue";
import {ref} from "vue";
import {useTeamStore} from "@/stores/TeamStore";

let showModal = ref(false);
let team = useTeamStore();


</script>

<template>
  <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
          :disabled="! team.spotsRemaining"
          @click="showModal = true"
  >Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false" class="mt-6">
      <p>Need to add a new member to your team?</p>

      <form>
        <div class="flex gap">
          <input type="email" placeholder="email" class="flex-1">
          <button class="text-sm bg-gray-300 rounded-lg py-1 px-3 hover:bg-gray-400">Add</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>
