import Vue from "vue";

var truncate = function(string, value) {
  return (string || '').substring(0, value) + '…';
}
export default () => {
  Vue.filter("truncate", truncate);
};
