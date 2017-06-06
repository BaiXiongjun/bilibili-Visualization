var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var clean = require('gulp-clean');

gulp.task('default', function() {
  gulp.src("./src/assets/**")
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('clean', function(){
  gulp.src("../bilibili-vis-gh-pages/static/js")
    .pipe(clean());

  gulp.src("../bilibili-vis-gh-pages/static/css")
    .pipe(clean());
})

gulp.task('copy_build',function(){
    return gulp.src("./build/**")
            .pipe(gulp.dest('../bilibili-vis-gh-pages'));
});

gulp.task('rename_bundle',['clean','copy_build'] ,function(){
  
 return gulp.src("./build/static/js/*.js")
        .pipe(rename(function(path){
            path.dirname = ".";
            path.basename = 'bundle';
            path.extname = ".js";
            console.log(path)
          }))
        .pipe(gulp.dest('../bilibili-vis-gh-pages/assets/js'));
});

gulp.task('build_addonvis',function(){
    return   gulp.src("../bilibili-vis-gh-pages/assets/js/addonvis.js")
            .pipe(replace(/http:\/\/127\.0\.0\.1:3000/g, 'https://h12345jack.github.io/bilibili-Visualization'))
            .pipe(gulp.dest("../bilibili-vis-gh-pages/static/js"));

})
gulp.task('build',['rename_bundle', 'build_addonvis'], function(){
  
  return gulp.src("./gh-pages/index.html")
    .pipe(replace(/http:\/\/127\.0\.0\.1:3000/g, 'https://h12345jack.github.io/bilibili-Visualization'))
    .pipe(rename(function(path){
      console.log(path);
    }))
    .pipe(gulp.dest("../bilibili-vis-gh-pages"))

})