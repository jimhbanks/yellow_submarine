//server js file

var express = require("express");
var app = express();
var morgan = require('morgan');  
var path = require("path");
var http = require('http');
var bodyParser = require("body-parser");
var xml2js = require('xml2js').parseString;
var request = require('request');
var Q = require('q');
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var flash = require('connect-flash');
var TwitterStrategy = require('passport-twitter').Strategy;
var cookieParser = require('cookie-parser');
var Promise = require('promise');
var session = require('express-session');
var mongoose = require('mongoose');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var db = require('./models');
app.set('views', './views');
app.set('view engine', '.ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//_____PASSPORT TWITTER_________________________
var TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
var TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    // NOTE: You'll probably want to associate the Twitter profile with a
    //       user record in your application's DB.
    var user = profile;
    return done(null, user);
  }
));
//__________________________________________________


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// root path
app.get('/',function (req, res, next){
		var getGameDataFromApi = new Promise(function (resolve, reject) {
			var gameData = { 
				gameImages: [],
				gameNames: [],
				gameKeys: []
			}
			//show 10 of the most rates games
		  request('http://api.giantbomb.com/games/?api_key='+process.env.GIANTBOMB_KEY+'&format=JSON&sort=number_of_user_reviews:desc&limit=18', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		    	var gamesArray = JSON.parse(body).results;
		    	for(var i=0;i<gamesArray.length;i++){
		    		if(gamesArray[i].image!=null){
		    			console.log(gamesArray[i].image.small_url);
			    		gameData.gameImages.push(gamesArray[i].image.small_url);
			    		gameData.gameNames.push(gamesArray[i].name);
			    		gameData.gameKeys.push(gamesArray[i].id);
			    	}
		    	}
		    	resolve(gameData);
		    }
			})
		});

		getGameDataFromApi.then(function(data){
			res.locals.gameKeys = data.gameKeys;
			res.locals.gameNames = data.gameNames;
			res.locals.gameImages = data.gameImages;
			res.render("index.ejs");
		});
});

function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    loadNewContent(url, bool);
}

function loadNewContent(url, bool) {
    var newSectionName = url,
      section = $('<div class="cd-main-content '+newSectionName+'"></div>');
      
    section.load(url, function(event){
      // load new content and replace <main> content with the new one
        $('main').html(section);
        //...
        $('body').removeClass('page-is-changing');
        //...
 
        if(url != window.location){
          //add the new page to the window.history
          window.history.pushState({path: url},'',url);
        }
  });
}

app.get('/show/:id', function(req, res){
  	request('http://www.giantbomb.com/api/game/3030-'+req.params.id+'/?api_key='+process.env.GIANTBOMB_KEY+'&format=json', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			console.log(JSON.parse(body).results.deck);
	      desc = JSON.parse(body).results.deck;
	      name = JSON.parse(body).results.name;
	      img = JSON.parse(body).results.image.medium_url;
	      res.locals.desc = desc ;
	      res.locals.name = name ;
			  res.locals.img = img;
			  res.render('show.ejs');
	    }
	  })
});

app.get("/gamesearch/:name", function(req, res) {
	var getGameDataFromApi = new Promise(function (resolve, reject) {
		var gameData = { 
			gameImages: [],
			gameNames: [],
			gameKeys: []
		}
	  request('http://www.giantbomb.com/api/search?api_key='+process.env.GIANTBOMB_KEY+'&format=json&query="'+req.params.name+'"&resources=game', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var gamesArray = JSON.parse(body).results;
	    	for(var i=0;i<gamesArray.length;i++){
	    		if(gamesArray[i].image!=null){
	    			console.log(gamesArray[i].image.small_url);
		    		gameData.gameImages.push(gamesArray[i].image.small_url);
		    		gameData.gameNames.push(gamesArray[i].name);
		    		gameData.gameKeys.push(gamesArray[i].id);
		    	}
	    	}
	    	resolve(gameData);
	    }
		})
	});

	getGameDataFromApi.then(function(data){
		res.locals.gameKeys = data.gameKeys;
		res.locals.gameNames = data.gameNames;
		res.locals.gameImages = data.gameImages;
		res.render("content.ejs");
	});
});

app.get("/platforms", function(req, res) {
	var getGameDataFromApi = new Promise(function (resolve, reject) {
		var platformData = { 
			platformImages: [],
			platformNames: [],
			platformKeys: []
		}
	  request('http://api.giantbomb.com/platforms/?api_key='+process.env.GIANTBOMB_KEY+'&format=JSON&sort=date_added:desc', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var platformArray = JSON.parse(body).results;
	    	for(var i=0;i<platformArray.length;i++){
	    		if(platformArray[i].image!=null){
	    			console.log(platformArray[i].image.small_url);
		    		platformData.platformImages.push(platformArray[i].image.small_url);
		    		platformData.platformNames.push(platformArray[i].name);
		    		platformData.platformKeys.push(platformArray[i].id);
		    	}
	    	}
	    	resolve(platformData);
	    }
		})
	});

	getGameDataFromApi.then(function(data){
		res.locals.gameKeys = data.platformKeys;
		res.locals.gameNames = data.platformNames;
		res.locals.gameImages = data.platformImages;
		res.render("content.ejs");
	});
});


app.get('/account',
	ensureLoggedIn('/login'),
	function(req, res) {
		var gamesList= [];
		db.Game.find({}, function(err, games){ 	
    	for(var i=0;i<games.length;i++){
    		gamesList.push(games[i].name);
    	};
	  	console.log(gamesList);
	  	res.locals.name = req.user.username;
	  	res.locals.gamesList = gamesList;
			res.render("account.ejs");
  	})

});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.get('/login',
  function(req, res) {
    res.send('<html><body><a href="/auth/twitter">Sign in with Twitter</a></body></html>');
  });

app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', { successReturnToOrRedirect: '/account', failureRedirect: '/login' }));

app.listen(3000, function (){
  console.log("listening on port 3000");
});