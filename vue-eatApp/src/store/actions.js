var actions={
	showFoot({commit,state}){
		commit("showFoot")
	},
	hideFoot({commit,state}){
		commit("hideFoot")
	},
	showUser({commit,state}){
		commit("showUser")
	},
	hideUser({commit,state}){
		commit("hideUser")
	}
}
export default actions;