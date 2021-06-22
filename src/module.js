console.log('module')

async function start() {
  await Promise.resolve()
}

start().then(r => console.log('promise'))
