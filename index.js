var gulp        = require('gulp');
var notify      = require('gulp-notify');
var bower       = require('gulp-bower');
var Elixir      = require('laravel-elixir');

var Task = Elixir.Task;

function notify_message(title, subtitle, message, icon){
    gulp.src('').pipe(notify({
        title: title,
        subtitle: subtitle,
        icon: __dirname + icon,
        message: message
    }));
}

Elixir.extend('Bower', function(options, dest){

    var defaultOptions = {};
    var defaultDest    = null;

    options = options || defaultOptions;
    dest = dest || defaultDest;

    new Task('Bower', function(){

        var onError = function(err){
            notify.onError({
                title       : "Elixir Bower",
                subtitule   : "Elixir Bower Failed!",
                message     : "Error : <%= error.message %>",
                icon        : __dirname + '/../laravel-elixir/icons/fail.png'
            })(err);

            this.emit('end');
        }
        if(dest != null){
            return bower(options)
                .pipe(gulp.dest(dest));
        }else{
            return bower(options);
        }

    });
});