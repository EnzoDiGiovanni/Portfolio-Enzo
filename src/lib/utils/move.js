/**
 * Calcul la position de l'élement par rapport au haut de la page
 * @param {HTMLElement} element
 * @return {number}
 */

function offsetTop(element, acc = 0) {
  if (element.offsetParent) {
    return offsetTop(element.offsetParent, acc + element.offsetTop);
  }

  return acc + element.offsetTop;
}

class Parallax {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax);
    this.onScroll = this.onScroll.bind(this);
    this.onIntersection = this.onIntersection.bind(this);
    this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
    this.ticking = false; // Drapeau pour limiter les appels de requestAnimationFrame

    const observer = new IntersectionObserver(this.onIntersection);
    observer.observe(element);
    this.onScroll(); // Appel initial pour positionner l'élément
  }

  /**
   *
   * @param {IntersectionObserverEntry[]} entries
   */

  onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", this.onScroll);
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
      } else {
        document.removeEventListener("scroll", this.onScroll);
      }
    }
  }

  onScroll() {
    if (!this.ticking) {
      this.ticking = true;
      window.requestAnimationFrame(() => {
        const screenY = window.scrollY + window.innerHeight / 2;

        const diffY = this.elementY - screenY;
        this.element.style.setProperty(
          "transform",
          `translateY(${diffY * -1 * this.ratio}px)`
        );

        this.ticking = false; // Réinitialise le drapeau après l'animation
      });
    }
  }

  /**
   *
   * @returns {Parallax[]}
   */
  static bind() {
    return Array.from(document.querySelectorAll("[data-parallax]")).map(
      (element) => {
        return new Parallax(element);
      }
    );
  }
}

Parallax.bind();
