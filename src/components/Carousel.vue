<template>
<div class="margin-carousel">
       <Slick id="slide" class="Slick"
          ref="Slick"
          :options="slickOptions"
          @afterChange="handleAfterChange"
          @beforeChange="handleBeforeChange"
          @breakpoint="handleBreakpoint"
          @destroy="handleDestroy"
          @edge="handleEdge"
          @init="handleInit"
          @reInit="handleReInit"
          @setPosition="handleSetPosition"
          @swipe="handleSwipe">
  
  <div class="link"><img class="slides" src="@/assets/images/boysgirls.svg" alt="Boys and girls"></div>
  <div class="link"><img class="slides" src="@/assets/images/business.svg" alt="Business"></div>
  <div class="link"><img class="slides" src="@/assets/images/buttons.svg" alt="Buttons"></div>
  <div class="link"><img class="slides" src="@/assets/images/socialmedia.svg" alt="Social MEdia"></div>
  <div class="link"><img class="slides" src="@/assets/images/jezik.svg" alt="Jezik"></div>
  <div class="link"><img class="slides" src="@/assets/images/text.svg" alt="Text"></div>
  <div class="link"><img class="slides" src="@/assets/images/pistol.svg" alt="Pistol"></div>
  
</Slick>

<div class="container" >
    

<Slick id="slide2" class="slick-for"
          ref="Slick2"
          :options="slickOptions2"
          @afterChange="handleAfterChange"
          @beforeChange="handleBeforeChange"
          @breakpoint="handleBreakpoint"
          @destroy="handleDestroy"
          @edge="handleEdge"
          @init="handleInit"
          @reInit="handleReInit"
          @setPosition="handleSetPosition"
          @swipe="handleSwipe">

    
        <div>
            <h3>Dark UI Kit Freebie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           
            </div>
         <div>
            <h3>Business</h3>
            <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.Nulla facilisi.</p>
        </div>
         <div>
            <h3>BUTTONS</h3>
            <p>Pellentesque pellentesque arcu a elit congue lacinia.</p>
        </div>
         <div>
            <h3>SOCIAL</h3>
            <p> Donec sit amet sapien neque, id ullamcorper diam. </p>
        </div>
        <div>
            <h3>JEZIK</h3>
            <p>Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.</p>
        </div>
        <div>
            <h3>TEXt</h3>
            <p>This is the only other technique besides #5 which passes the CSS ON</p>
        </div>
        <div>
            <h3>PISTOL</h3>
            <p>Images OFF test.</p>

        </div>
    
    
</Slick>
<div class="row justify-content-center">
    <div id="mobile-none" class="col-md-1">
        <a  class="slick-prev" @click="prev">
            <img id="prev" src="@/assets/images/icons/arrow-left.svg" alt="Left Arrow">
        </a>
   
    </div>
    <div id="mobile-none" class="col-md-1">
     <a  class="slick-next" @click="next">
            <img id="next" src="@/assets/images/icons/arrow-right.svg" alt="Right Arrow">
        </a>
     </div>
    </div>
</div>
</div>
    
</template>

<script>
import Slick from 'vue-slick';
export default {
    name: "Carousel",
    components:{
        Slick
    },
    data(){
        return {
            // slides: [{
            //     title: "Dark UI",
            //     text: "Lorem",
            //     imageUrl: "/images/"
            // }]
            slickOptions: {
                centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1,         
          focuseOnSelect:true,           
          asNavFor:".slick-for",
          arrows: false  ,         
          variableWidth:true,
          swipe:false,
          responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow:3,
        swipe:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        autoplay:true,
        autoplay:1000,
        slidesToShow: 1,
        swipe:true
      }
    }
  ]      
    },
     slickOptions2: {
          slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor:".Slick",
        adaptiveHeight:true,
          
     }  
        };
    },
    methods: {
        next() {
            this.$refs.Slick.next();
        },

        prev() {
            this.$refs.Slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
}
</script>

<style>

.slides{

    width: 300px ;
    height: 200px;
   
  
    cursor: pointer;
}
#carousel{
        width: 100%;
}
.Slick .slick-slide{
    opacity: 0.5;
    margin-right: 20px;
}

.Slick .slick-current{
    opacity: 1;
}
.margin-carousel{
    margin-bottom:60px;
}
.link{
    background-image:url("../assets/images/icons/link-hover.svg");
    z-index: 9999;
 }
 
 @media screen and (max-width: 480px) {
.margin-carousel{
    margin-bottom:0;
}
}
</style>
