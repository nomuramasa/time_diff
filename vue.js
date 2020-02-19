new Vue( {
  el: '#app',
  data: {
    time_a: 12, // 日本時間
    time_b: 10 // ベトナム時間
  },
	methods: {
		move: function(){ // レンジが動いたとき
			this.time_a = Number(this.time_a) // レンジinputの値を数値に直す
			this.time_b = Number(this.time_b)
			this.time_b = this.time_a - 2 // ベトナム時間を、日本時間より2時間遅れにする
			console.log(this.time_b, this.time_a) 
		},
	},
} )