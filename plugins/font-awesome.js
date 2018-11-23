import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCalendarCheck, faFileInvoice} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faCalendarCheck, faFileInvoice)

Vue.component('font-awesome-icon', FontAwesomeIcon)
