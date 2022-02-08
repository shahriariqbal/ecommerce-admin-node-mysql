async function Index(req, res) {
       console.log('test');
       var data = {};
       res.set('content-type', 'text/html; charset=mycharset');
       res.render('Admin/Home/Index.ejs', {
              title: '24Bigbazar.com | Login',
              content: 'Create by Tuan Anh Zippy <mmm@gmail.com>',
              data: data,
              action: "Home",
              controller: 'Index'
       });
};
exports.Index = Index;