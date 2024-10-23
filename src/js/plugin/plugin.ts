import type { App } from 'vue';
import { Splide, SplideSlide } from '../components';


export const VueSplide = {
  install( app: App ): void {
    if ( !Splide.name || !SplideSlide.name ) {
      throw new Error( 'VueSplide components are not installed. Please check the installation guide.' );
    }
    app.component( Splide.name, Splide );
    app.component( SplideSlide.name, SplideSlide );
  },
};
