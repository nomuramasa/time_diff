new Vue( {
	el: '#app',
	
  data: {
		timeDiff: -17, // 時差 
		timeJapan: new Date().getHours(), // 日本時間（現在時刻）
		timeCanada: new Date().getHours() -17, // カナダ時間（日本の現在時刻と時差から計算）
    // monthJapan: 2, // 日本月 // dateJapan: 20, // 日本日付 // dayJapan: '木', // 日本曜日
    // monthCanada: 2, // カナダ月 // dateCanada: 20, // カナダ日付 // dayCanada: '木', // カナダ曜日
	},

	// computed: {
	// 	timeCanada: function() { // カナダ時間
	// 		return this.timeJapan + this.timeDiff // 日本時間と時差から計算
	// 	}
	// },

	methods: {

		loop: function () { // 24時間の目盛り左右ループ
			// 日本
			if(this.timeJapan > 23){ // 25時になったら
				this.timeJapan = this.timeJapan - 24 // 1時にする
			}else if(this.timeJapan < 0){ // 0時になったら
				this.timeJapan = this.timeJapan + 24 // 24時にする
			}
			// カナダ
			if(this.timeCanada > 23){ // 25時になったら
				this.timeCanada = this.timeCanada - 24 // 1時にする
			}else if(this.timeCanada < 0){ // 0時になったら
				this.timeCanada = this.timeCanada + 24 // 24時にする
			}
		},
			
		
		move: function (movingCountry) { // レンジが動いたとき

			// 数値型にする
			this.timeJapan = Number(this.timeJapan);  this.timeCanada = Number(this.timeCanada) // レンジinputの値を数値に直す

			// 時差を算出
			if(movingCountry == 'japan'){ // 日本の目盛りが動いた時
				this.timeCanada = this.timeJapan + this.timeDiff // カナダの時間を、日本時間より17時間遅れにする
			}else if(movingCountry == 'canada'){ // カナダの目盛りが動いた場合
				this.timeJapan = this.timeCanada - this.timeDiff // 日本時間を、カナダの時間より17時間早くする
			}

			// 左右ループ調整
			this.loop()
		},


		now: function(){ // 現在時刻
			this.timeJapan = new Date().getHours(), // 日本時間（現在時刻）
			this.timeCanada = new Date().getHours() -17, // カナダ時間（日本の現在時刻と時差から計算）
			this.loop()	// 左右ループ調整
		},
		
		
		forw: function(){ // 進む
			this.timeJapan = this.timeJapan + 1
			this.timeCanada = this.timeCanada + 1
			this.loop()	// 左右ループ調整
		},

		prev: function(){ // 戻る
			this.timeJapan = this.timeJapan - 1
			this.timeCanada = this.timeCanada - 1
			this.loop()	// 左右ループ調整
		}

	},
  created: function () { // 最初に
    this.loop() // 左右ループ調整
	},
} )