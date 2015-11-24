var fs = require("fs");
var browserify = require("browserify");
var gulp = require("gulp");
var reactify = require("reactify");

gulp.task('js', () =>{
	browserify({ debug: true })
	  .transform(reactify)
	  .require("./index.js", { entry: true })
	  .bundle()
	  .on("error", function (err) { console.log("Error: " + err.message); })
	  .pipe(fs.createWriteStream("./dist/react-plotly.js"));
});

gulp.task('watch',() => {
	gulp.watch('./src/**/*.js',['js']);
});

gulp.task("default", ['js', 'watch']);