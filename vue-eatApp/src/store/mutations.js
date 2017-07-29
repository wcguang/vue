var mutations={
	showFoot:(state)=>{
		state.foot=true;
	},
	hideFoot:(state)=>{
		state.foot=false;
	},
	showUser:(state)=>{
		state.user=true;
	},
	hideUser(state){
		state.user=false;
	}
}
export default mutations;