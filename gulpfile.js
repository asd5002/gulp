var gulp = require("gulp"); //依赖注入
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var minifyCss = require("gulp-minify-css");
gulp.task('lesstest', function() {
	gulp.src("src/less/index.less")
		.pipe(less())
		.pipe(minifyCss())
		.pipe(gulp.dest("lib/css"));
});
gulp.task('jsmin',function(){
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(concat("public.min.js"))
		.pipe(gulp.dest("lib/js"));
})

gulp.task('imgmin',function(){
	gulp.src("src/img/*.png")
		.pipe(imagemin())
		.pipe(gulp.dest("lib/img"))
})

gulp.task("default",['lesstest','jsmin','imgmin']);
