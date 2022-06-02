import Vue from 'vue';
<<<<<<< HEAD
import GMap from "C:\\Users\\Ermenda Hoxha\\Desktop\\Alit\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\Ermenda Hoxha\\Desktop\\Alit\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\Ermenda Hoxha\\Desktop\\Alit\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\Ermenda Hoxha\\Desktop\\Alit\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
=======
import GMap from "\u002FUsers\u002Ffrancesco\u002Fgit\u002FAlit\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMap.vue";
import GMapMarker from "\u002FUsers\u002Ffrancesco\u002Fgit\u002FAlit\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapMarker.vue";
import GMapCircle from "\u002FUsers\u002Ffrancesco\u002Fgit\u002FAlit\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapCircle.vue";
import GMapInfoWindow from "\u002FUsers\u002Ffrancesco\u002Fgit\u002FAlit\u002Fnode_modules\u002Fnuxt-gmaps\u002Fcomponents\u002FGMapInfoWindow.vue";
>>>>>>> 088047ccb237daf92ecb33a8ed5565b90e81b377
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew", loaded: false, libraries: undefined})
}