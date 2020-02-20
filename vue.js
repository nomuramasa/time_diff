new Vue( {
  el: '#app',
  data: {
    month_a: 2, // 日本月
    date_a: 20, // 日本日付
    day_a: '木', // 日本曜日
		time_a: 9, // 日本時間

    month_b: 2, // カナダ月
    date_b: 20, // カナダ日付
    day_b: '木', // カナダ曜日
    time_b: 16 // カナダ時間
  },
	methods: {
		move: function(x){ // レンジが動いたとき
			console.log(x)
			// 数値型にする
			this.time_a = Number(this.time_a);  this.time_b = Number(this.time_b) // レンジinputの値を数値に直す

			// 時差を算出
			if(x == 'a'){ // 上が動いた場合
				this.time_b = this.time_a - 17 // バンクーバー@カナダの時間を、日本時間より17時間遅れにする
			}else if(x == 'b'){ // 下が動いた場合
				this.time_a = this.time_b + 17 // 日本時間を、バンクーバー@カナダの時間より17時間早くする
			}
			

			// 左右ループ
			if(this.time_a > 23){ // 25時になったら
				this.time_a = this.time_a - 24 // 1時にする
			}else if(this.time_a < 0){ // 0時になったら
				this.time_a = this.time_a + 24 // 24時にする
			}
			// bも
			if(this.time_b > 23){ // 25時になったら
				this.time_b = this.time_b - 24 // 1時にする
			}else if(this.time_b < 0){ // 0時になったら
				this.time_b = this.time_b + 24 // 24時にする
			}
		},
		forw: function(){ // 進む
			this.time_a = this.time_a + 1
			this.time_b = this.time_b + 1
			// 左右ループ
			if(this.time_a > 23){ // 25時になったら
				this.time_a = this.time_a - 24 // 1時にする
			}else if(this.time_a < 0){ // 0時になったら
				this.time_a = this.time_a + 24 // 24時にする
			}
			// bも
			if(this.time_b > 23){ // 25時になったら
				this.time_b = this.time_b - 24 // 1時にする
			}else if(this.time_b < 0){ // 0時になったら
				this.time_b = this.time_b + 24 // 24時にする
			}
		},
	},
} )