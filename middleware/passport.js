const passport = require('passport');
const {Strategy} = require('passport-local').Strategy;
const {User, Role, Permission} = require('../models');
const md5 = require('md5');

//this function is called on authenticate to test if the user's credentials