<template>
  <Header />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Footer />
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
