new Vue( {
  el: '#app',
  data: {
    time_a: 0,
    time_b: 1
  },
	methods: {
		move: function(m){
			if(m.target.name == 'time_a'){
				moving_time = this.time_a // 動かしてる側
				other_time = this.time_b // 釣られる側
			}else{
				moving_time = this.time_b
				other_time = this.time_a				
			}


			console.log(other_time)
			console.log(moving_time)
			other_time = Number(moving_time) + 5

			if(other_time > 24){ // 釣られる側が右へ振り切ったら
				other_time = other_time - 24
			}else if(other_time < 0){ // 左へ振り切ったら
				other_time = other_time + 24
			}
		},
		// del: function(i){ // メモ削除
		// 	this.boxList.splice(i, 1)
		// }
	},
} )