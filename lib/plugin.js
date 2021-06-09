import Vue from 'vue'
import Visibility from './visibility'

export default (context, inject) => {
  context.$visibility = Vue.observable(Visibility())

  inject('visibility', context.$visibility)
}
