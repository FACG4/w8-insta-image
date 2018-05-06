const comment = require('./../database/queries/comments');

// exports.get = (req, res) =>{
//   res.render('singlepic')
// }
//
// exports.postcomment = (req, res) =>{
//   const comment = req.body;
//   const { id } = req.params;
//   const { user_id } = req.params;
//
// comment.addcomment(id, user_id, comment, (err, result) => {
//     console.log('helllll');
//     console.log(user_id);
//     if (err) throw new Error('erorr', err);
// });
//   res.status(200);
//  }
//
//
// exports.getcomments = (req, res) => {
//   comment.getcomment((err, data) => {
//     if(err) {
//       res.status(404).send('sorry can not get this comment', err)
//      }
//      res.render('singlepic',{data});
//    });
// }
