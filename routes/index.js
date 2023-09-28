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
      title: 'Business Consulting',
      description: 'I can help to modernize your business with latest technologies.',
      image: '/images/business-consulting.jpg',
    },
    {
      title: 'General Programming',
      description: 'I have a wide range of experience in various programming languages.',
      image: '/images/general-programming.jpg',
    },
    {
      title: 'Custom Solutions',
      description: 'I am flexible and can provide custom solutions to meet your needs.',
      image: '/images/custom-solutions.jpg',
    },
  ];

  res.render('services', { page: 'Services', menuId: 'services', services });
});

module.exports = router;
