const fakeReqeustCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500
  setTimeout(() => {
    if (delay > 4000) {
      failure(`Connection timeout`)
    } else {
      success(`Fake data from ${url}`)
    }
  }, 3000)
}

/* passing anonymous function as a parameter and also making that anony functions take 
argu/para as we pass para/argu in it. */
fakeReqeustCallback('books.com', (e) => {
  console.log('It worked')
  console.log(e)
}, (e) => {
  console.log('It didnt')
  console.log(e)
})
