new Vue( {
  el: '#app',
  data: {
    time_a: 9, // 日本時間
    time_b: 16 // バンクーバー時間@カナダ
  },
	methods: {
		move: function(){ // レンジが動いたとき
			// 数値型にする
			this.time_a = Number(this.time_a);  this.time_b = Number(this.time_b) // レンジinputの値を数値に直す

			// 時差を算出
			this.time_b = this.time_a - 17 // バンクーバー@カナダの時間を、日本時間より17時間遅れにする

			// ループ
			if(this.time_a > 24){ // 25時になったら
				this.time_a = this.time_a - 24 // 1時にする
			}else if(this.time_a < 1){ // 0時になったら
				this.time_a = this.time_a + 24 // 24時にする
			}
			// bも
			if(this.time_b > 24){ // 25時になったら
				this.time_b = this.time_b - 24 // 1時にする
			}else if(this.time_b < 1){ // 0時になったら
				this.time_b = this.time_b + 24 // 24時にする
			}
		},
	},
} )