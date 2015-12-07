var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task("js", function(callback) {
    // run webpack
    webpack({
        entry:"./demo.js",
        output:{
        	path: "dist",
        	filename: "demo.js"
        },
        module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		}
    }, 
	function(err, stats) {
	    if(err) throw new gutil.PluginError("webpack", err);
	    gutil.log("[webpack]", stats.toString({
	        // output options
	    }));
	    callback();
	})
});

gulp.task("watch", ()=>{
	gulp.watch('./**/*.js', ['js']);
})

gulp.task("default",["js","watch"])