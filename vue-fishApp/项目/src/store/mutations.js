var mutations={
	showFoot:(state)=>{
		state.foot=true
	},
	hideFoot:(state)=>{
		state.foot=false;
	},
	showLoading:function(state){
		state.loading=true;
	},
	hideLoading:function(state){
		state.loading=false;
	},
	showUser:(state)=>{
		state.user=true;
	},
	hideUser(state){
		state.user=false;
	},
	showReg(state){
		state.reg=true;
	},
	hideReg(state){
		state.reg=false;
	}
}
export default mutations;