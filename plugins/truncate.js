import Vue from "vue";

var truncate = function(string, value) {
  if(string.length > value) {
    return (string || '').substring(0, value) + '…';
  } else {
    return string
  }
  
}
export default () => {
  Vue.filter("truncate", truncate);
};
