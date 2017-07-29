export const time=(input)=>{
	var z=new Date();
	z.setTime(input);
	return `${z.getFullYear()}年${z.getMonth()}月${z.getDate()}日${z.getHours()}:${z.getMinutes()}:${z.getSeconds()}`;
}