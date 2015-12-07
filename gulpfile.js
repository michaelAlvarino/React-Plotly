var gulp = require("gulp");
var react = require("gulp-react");

gulp.task("js", function(callback) {
   gulp.src('./src/react-plotly.js')
   .pipe(react())
   .pipe(gulp.dest('dist'))
});

gulp.task("watch", ()=>{
	gulp.watch('./src/**/*.js', ['js']);
})

gulp.task("default",["js","watch"])