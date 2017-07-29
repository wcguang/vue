import home from './home.vue'
import say from './say.vue'
import we from './we.vue'
import my from './my.vue'
import addres from './address.vue'
import discount from './discount.vue'
import dingdan from './dingdan.vue'
import search from './search.vue'
import details from './details.vue'
import text from './text.vue'
var routerArr=[
 {name:'home',path:'/home',component:home},
 {name:'say',path:'/say',component:say},
 {name:'we',path:'/we',component:we},
 {name:'my',path:'/my',component:my,
 children:[
 {name:'addres',path:'addres',component:addres},
 {name:'discount',path:'discount',component:discount},
 {name:'dingdan',path:'dingdan',component:dingdan}
 ]
}
,
 {name:'search',path:'/search',component:search},
 {name:'details',path:'/details',component:details},
 {name:'text',path:'/text/:uuid',component:text},
  {name:'discount',path:'/discount',component:discount},
 {path:'/',redirect:'/home'}
];
export default routerArr;