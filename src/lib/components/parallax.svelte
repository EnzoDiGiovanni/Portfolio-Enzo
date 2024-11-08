<script>
  import { onMount } from "svelte";

  export let parallaxRatio = 0; // Ratio de défilement pour l’effet de parallaxe
  let element;

  function offsetTop(element, acc = 0) {
    if (element.offsetParent) {
      return offsetTop(element.offsetParent, acc + element.offsetTop);
    }
    return acc + element.offsetTop;
  }

  function onScroll() {
    const elementY = offsetTop(element) + element.offsetHeight / 2;
    const screenY = window.scrollY + window.innerHeight / 2;
    const diffY = elementY - screenY;
    element.style.transform = `translateY(${diffY * -1 * parallaxRatio}px)`;
  }

  onMount(() => {
    const handleScroll = () => window.requestAnimationFrame(onScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.addEventListener("scroll", handleScroll);
          onScroll(); // Position initiale
        } else {
          document.removeEventListener("scroll", handleScroll);
        }
      });
    });

    observer.observe(element);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  });
</script>

<div bind:this={element} style="will-change: transform;">
  <slot></slot>
</div>

<style>
  div {
    transition: transform 0.1s ease;
  }
</style>
