const
pico=require('pico-common/bin/pico-cli'),
test= pico.export('pico/test').test,
redis=require('./index')

let client

test('ensure redis loaded', function(cb){
	cb(null, !!redis)
})
test('ensure redis create', function(cb){
	redis.create({path:'',env:'pro'},{},(err, cli)=>{
		if (err) return cb(err)
		client=cli
		cb(null, !!client)
	})
})
