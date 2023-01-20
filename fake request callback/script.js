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

/* 
function a(e) {
  console.log('It worked')
  console.log(e)
} 

function b(e) {
  console.log('It didnt')
  console.log(e)
} */

fakeReqeustCallback('books.com', (e) => {
  console.log('It worked')
  console.log(e)
}, (e) => {
  console.log('It didnt')
  console.log(e)
})