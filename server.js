require('dotenv').config();

const mysql = require('mysql2');

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

const { join } = require('path');
const passport = require('passport');
const { User, Post } = require('./models');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const db = require('./db');
const app = express();
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialize: true,
    store: new sequelizeStore ({ db: db })
}

app.use(session(sess));
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
    done(null, user.id)
});


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findOne({ where: { id }, include: [Post] })
    .then(user => cb(null, user))
    .catch(err => cb(err))))

app.use(require('./routes'));

db.sync().then(() => {
    console.log("Connected to DataBase!");
    app.listen(PORT, () => {
        console.log(`Server listing on ${PORT}`);
    })
})

