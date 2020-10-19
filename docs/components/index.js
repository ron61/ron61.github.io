export { default as About } from '../../components/About.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as Skill } from '../../components/Skill.vue'
export { default as Top } from '../../components/Top.vue'
export { default as Works } from '../../components/Works.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazyContact = import('../../components/Contact.vue' /* webpackChunkName: "components/Contact" */).then(c => c.default || c)
export const LazySkill = import('../../components/Skill.vue' /* webpackChunkName: "components/Skill" */).then(c => c.default || c)
export const LazyTop = import('../../components/Top.vue' /* webpackChunkName: "components/Top" */).then(c => c.default || c)
export const LazyWorks = import('../../components/Works.vue' /* webpackChunkName: "components/Works" */).then(c => c.default || c)
