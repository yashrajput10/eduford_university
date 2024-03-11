const express = require("express");
const { Module } = require("module");
const routes = express();

routes.get('/', (req,res)=>{
    res.render('index', {title : "Home"});
})

routes.get('/about', (req,res)=>{
    res.render('about', {title : "about"});
})

routes.get('/course', (req,res)=>{
    res.render('course', {title : "course"});
})

routes.get('/blog', (req,res)=>{
    res.render('blog', {title : "blog"});
})

routes.get('/contact', (req,res)=>{
    res.render('contact', {title : "contact"});
})

module.exports=routes;