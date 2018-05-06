const deletepic = require('./../database/queries/deletepic');

console.log('nooooooooo');
exports.delete = (req, res) => {
const { id } = req.params;
// const { user_id} = request.params;
// console.log(user_id);
deletepic(id, (err, result) =>{
    if (err) {
      res.send('error')
    } else {

      return res.status(200).render('home', {result});
    }
  });
}
