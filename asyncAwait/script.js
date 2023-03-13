const login = async (user, pass) => {
  if (!user || !pass) throw 'Missing Credentials'
  if (pass === 'umer') return 'Welcome'
  throw 'invalid password'
}

/*login('uionj', 'umer')
  .then(msg => { console.log(msg) })
  .catch(err => { console.log(err) })*/

const log = async () => {
  await login('uionj', 'umer')
}