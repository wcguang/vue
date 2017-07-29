import footer from "./footer.vue"
import mainNav from "./mainNav.vue";
import shopping from "./shpping.vue";
import content from "./content.vue";
import my_con from "./my_con.vue";
import login from "./login.vue";
import reg from "./reg.vue";
import details from "./shopping_details.vue";
var routerArr=[
{name:"mainNav",path:'/index',component:mainNav},
{name:'shopping',path:'/shopping',component:shopping},
{name:'content',path:'/more',component:content},
{name:'my_con',path:'/my',component:my_con},
{name:'login',path:'/login',component:login},
{name:'reg',path:'/reg',component:reg},
{name:'details',path:'/details/:uuid',component:details},
{path:'/',redirect:'/index'}
]
export default routerArr;