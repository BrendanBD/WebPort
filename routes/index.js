var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Me', menuId:'about'});
});
router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Me', menuId:'contact'});
});




/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  const projects = [
    {
      title: 'Project 1',
      image: '/images/project1.jpg',
      description: 'Description of Project 1...',
    },
    {
      title: 'Project 2',
      image: '/images/project2.jpg',
      description: 'Description of Project 2...',
    },
    {
      title: 'Project 3',
      image: '/images/project3.jpg',
      description: 'Description of Project 3...',
    },
  ];

  res.render('projects', { page: 'Projects', menuId: 'projects', projects });
});

router.get('/services', function(req, res, next) {
  const services = [
    {
      title: 'Web Development',
      description: 'We create modern and responsive websites tailored to your needs.',
      image: '/images/web-development.jpg',
    },
    {
      title: 'Mobile App Development',
      description: 'We build mobile apps for iOS and Android platforms with cutting-edge technology.',
      image: '/images/mobile-app-development.jpg',
    },
    {
      title: 'General Programming',
      description: 'Our team is proficient in various programming languages for custom solutions.',
      image: '/images/general-programming.jpg',
    },
  ];

  res.render('services', { page: 'Services', menuId: 'services', services });
});

module.exports = router;
