Vue.config.devtools = true;

  Vue.component("card", {
    template: `
      <div class="card-wrap"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="card">
        <div class="card" :style="cardStyle">
          <div class="card-content">
            <div class="card-info">
              <slot name="cardheader"></slot>
              <slot name="AccessabilityLine"></slot>
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>`,
    mounted() {
      this.width = this.$refs.card.offsetWidth;
      this.height = this.$refs.card.offsetHeight;
    },
    props: ["dataImage"],
    data: () => ({
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    }),

    computed: {
      cardStyle() {
        const rX = this.mousePX * -10;
        const rY = this.mousePY * -5;
        return {
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        };
      },
      mousePX() {
        return this.mouseX / this.width;
      },
      mousePY() {
        return this.mouseY / this.height;
      },
    },

    methods: {
      handleMouseMove(e) {
        this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
        this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
      },
      handleMouseEnter() {
        clearTimeout(this.mouseLeaveDelay);
      },
      handleMouseLeave() {
        this.mouseLeaveDelay = setTimeout(() => {
          this.mouseX = 0;
          this.mouseY = 0;
        }, 1000);
      }
    }
  });

  // Instantiate two Vue instances with different class selectors
  const app1 = new Vue({
    el: ".app1"
  });

  const app2 = new Vue({
    el: ".app2"
  });

  /* carousel 

  $('.carousel').carousel();

  */