const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')

const home = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/about',
    name: 'adout',
    components: {
      'About': About
    }
  }
]

export default home
