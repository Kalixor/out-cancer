import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ReturnLink from './components/ReturnLink.vue'
import SocialActions from './components/SocialActions.vue'
import Tooltip from './components/Tooltip.vue'
import LanguageSwitch from './components/LanguageSwitch.vue'
import ImcCalculator from './components/ImcCalculator.vue'
import GkiEvaluator from './components/GkiEvaluator.vue'
import CommentSection from './components/CommentSection.vue'
import LinkButton from './components/LinkButton.vue'

import { useNavigation } from './composables/useNavigation'
import '@fortawesome/fontawesome-free/css/all.css'   // ← load the <i> tags
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShareNodes, faCoffee, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import './styles/custom.css'

library.add(faShareNodes, faCoffee, faHeart, faComment)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ReturnLink', ReturnLink)
    app.component('SocialActions', SocialActions)
    app.component('Tooltip', Tooltip)
    app.component('LanguageSwitch', LanguageSwitch)
    app.component('GkiEvaluator', GkiEvaluator)
    app.component('ImcCalculator', ImcCalculator)
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    app.component('CommentSection', CommentSection)
    app.component('LinkButton', LinkButton)
  },
  setup() {
    useNavigation()
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(LanguageSwitch)
    })
  }
}
