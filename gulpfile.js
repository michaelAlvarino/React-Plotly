var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task("js", function(callback) {
    // run webpack
    webpack({
        entry:"./index.js",
        output:{
        	path: "dist",
        	filename: "react-plotly.js",
        	library: "ReactPlotly",
        	libraryTarge: "umd"
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
		},
		// got this from react-draggable... trying to learn from a library i like
		externals:{
			react:{
				'commonjs': 'react',
				'commonjs2': 'react',
				'amd': 'react',
				// React dep should be available as window.React, not window.react
				'root': 'React'
			}
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
	gulp.watch('./src/**/*.js', ['js']);
})

gulp.task("default",["js","watch"])