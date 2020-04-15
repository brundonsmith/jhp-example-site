
module.exports = (req, res) => 
  req.method === 'GET'
    ? `
      <h1>Say hi!</h1>

      <form action="/contact" method="POST">
        <input name="yourName">
        <input type="submit">
      </form>
    `
    : `<h1>Hello, ${req.body.yourName}!</h1>`