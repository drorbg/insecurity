const mySafeKey = "ghp_qwertyuioplkjhgfdfghjhgfdkjhgvbnkjh1"

async function bootstrap() {
  throw new Error('ouch!')
}

bootstrap().then(initVals => {
  console.log('>> Insecurity in progress - what could go wrong?', initVals)
}).catch(err => {
  console.error('Oh no! something bad happened..')
})
