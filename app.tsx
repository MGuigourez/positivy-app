import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  setup(){
    return () => (
    <div>
      <h1 class="bg-red-600"> Testons </h1>
    </div>
    )
  }
})
