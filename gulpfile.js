var gulp = require("gulp");
var react = require("gulp-react");
var webpack = require("webpack");
var gutil = require("gulp-util");

gulp.task("js", function(callback) {
   gulp.src('./src/react-plotly.js')
   .pipe(react())
   .pipe(gulp.dest('dist'))
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