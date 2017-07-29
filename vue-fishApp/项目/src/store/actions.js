var actions={
	showFoot:function({commit,state}){
		commit('showFoot')
	},
	hideFoot:function({commit,state}){
		commit('hideFoot')
	},
	showLoading:({commit,state})=>{
		commit('showLoading')
	},
	hideLoading({commit,state}){
		commit('hideLoading')
	},
	showUser({commit,state}){
		commit('showUser')
	},
	hideUser({commit,state}){
		commit('hideUser')
	},
	showReg({commit,state}){
		commit('showReg')
	},
	hideReg({commit,state}){
		commit('hideReg')
	}
}
export default actions;