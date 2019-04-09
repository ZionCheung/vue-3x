const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')

const homeAdmin = [
  {
    path: '/admin',
    name: 'admin',
    component: Home
  },
  {
    path: '/adminAbout',
    name: 'adminAbout',
    components: {
      'About': About
    }
  }
]

export default homeAdmin
