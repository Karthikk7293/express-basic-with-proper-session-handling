var express = require('express');
const { response } = require('../app');
var router = express.Router();
const session = require('express-session');
const { load } = require('nodemon/lib/config');

var userLogin = {
  name: 'Karthik',
  emailId: 'karthikk7293@gmail.com',
  password: '123'
}
var adminLogin = {
  name: 'Kiran',
  emailId: 'karthikk7722@gmail.com',
  password: '321'
}
let product = [
  {
    name: 'One Plus 9Tone',
    price: '53.999',
    description: 'NiceAdmin is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides a clean and intuitive design that is focused on user experience. The custom ...',
    image: '1.png'
  },
  {
    name: 'One Plus 6 Pro',
    price: '49.999',
    description: 'Gp is a clean  website template created with Bootstrap framework. Its a professional and powerful business consulting template carefully crafted for designer, artists, company, ...',
    image: '2.png'
  },
  {
    name: 'T-Shirt ',
    price: '499.0',
    description: 'Arsha is a clean and modern business Bootstrap template designed specifically for startup,apps and IT services. You will be able to showcase your content on mobile devices such as ...',
    image: '5.png'
  },
  {
    name: 'Air pod 2',
    price: '19.999',
    description: 'MyResume is a creative resume and portfolio Bootstrap template. Its best suited for designers, programmers, photographers, freelancers any other who wants to ...',
    image: '9.png'
  },
  {
    name: 'White T-shirt',
    price: '499.0',
    description: 'NiceAdmin is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides design  is focused on user experience. The custom ...',
    image: '7.png'
  },
  {
    name: 'Fastrack ',
    price: '5949.0',
    description: 'NiceAdmin is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides a clean and intuitive design that is focused on user experience. The custom ...',
    image: '11.png'
  },
  {
    name: 'Mac Book Pro',
    price: '1,39.999',
    description: 'NiceAdmin is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides a clean and intuitive design that is focused on user experience. The custom ...',
    image: '10.png'
  },
  {
    name: 'Mac Book air',
    price: '2,39.999',
    description: 'NiceAdmin is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides a clean and intuitive design that is focused on user experience. The custom ...',
    image: '10.png'
  }

]
/* GET home page. */
router.get('/', function (req, res, next) {

  let data = req.session.name
  if (req.session.loginVarified) {
// console.log("api call for cookie",);
    let title = 'Home Page'
    res.render('index', { user: true, product, data, title });
  } else {
    //console.log("api call:",req);
    //console.log("api call:",res);
    let title = 'Login Page'
    res.render('user/login', { title });
  }

});
router.get('/login', (req, res) => {
  // console.log("api call:",req);
  let title = 'Login Page'
  res.render('user/login', { title });
})

router.post('/login', (req, res) => {
  if (userLogin.emailId == req.body.email && userLogin.password == req.body.password) {
    req.session.loginVarified = true
    req.session.email = req.body.email
    req.session.password = req.session.password
    req.session.name = userLogin.name
    res.redirect('/');
  } else if (adminLogin.emailId == req.body.email && adminLogin.password == req.body.password) {
    req.session.loginVarified = true
    req.session.email = req.body.email
    req.session.password = req.session.password
    req.session.name = adminLogin.name
    let data = req.session.name
    let title = 'Admin Page'
    res.render('user/admin', { user: true, product, data, title })
  } else {
    var error = 'Invalid username or password..'
    res.render('user/login', { error })
  }
})

router.get('/logout', (req, res) => {

  req.session.destroy()
  
  res.redirect('/login')
})

router.get('/signUp', (req, res) => {
  let title = 'Sign Up Page'
  res.render('user/signup', { title })
})

router.post('/signup', (req, res) => {
  console.log('api call :', req.body);
  res.redirect('/')
})

module.exports = router;
