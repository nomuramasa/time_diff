new Vue( {
  el: '#app',
  data: {
    time_a: 12, // 日本時間
    time_b: 10 // ベトナム時間
  },
	methods: {
		move: function(){ // レンジが動いたとき
			// 数値型にする
			this.time_a = Number(this.time_a);  this.time_b = Number(this.time_b) // レンジinputの値を数値に直す

			// 時差を算出
			this.time_b = this.time_a - 2 // ベトナム時間を、日本時間より2時間遅れにする

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