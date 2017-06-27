const
pico=require('pico-common/pico-cli'),
ensure= pico.export('pico/test').ensure,
redis=require('./index')

let client

ensure('ensure redis loaded', function(cb){
	cb(null, !!redis)
})
ensure('ensure redis create', function(cb){
	redis.create({path:'',env:'pro'},{},(err, cli)=>{
		if (err) return cb(err)
		client=cli
		cb(null, !!client)
	})
})
