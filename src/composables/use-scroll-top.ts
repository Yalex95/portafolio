import { ref, onMounted, onUnmounted } from "vue";

export function useScrollTop(threshold = 300) {
  const showButton = ref(false);

  const handleScroll = () => {
    showButton.value = window.scrollY > threshold;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    showButton,
    scrollToTop,
  };
}