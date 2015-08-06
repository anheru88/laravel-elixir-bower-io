## Laravel Elixir Bower

![Version](https://img.shields.io/npm/v/laravel-elixir-bower-io.svg?style=flat-square)

## Install


```sh
$ npm install laravel-elixir-bower-io --save-dev
```

## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile.


```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-bower-io');


elixir(function(mix) {
	mix.Bower();
});
```

This defaults to the directory configured in `./.bowerrc` or to `./bower_components` when no `.bowerrc` could be found.

You can also specify a custom Bower directory:


```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-bower-io');


elixir(function(mix) {
	mix.Bower('./my_bower_components');
});
```

By default `gulp-bower` runs `install` command for Bower.
Using `cmd` property, you can specify the custom command. (e : `update`).
Also you can pass property of custom directory, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-bower-io');


elixir(function(mix) {
	mix.Bower(
	{
		'directory' : './my_bower_components',
		'cmd' 		: 'update'
	});
});


```

