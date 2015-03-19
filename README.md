[![npm version](https://badge.fury.io/js/gulp-wrapper-baki.svg)](http://badge.fury.io/js/gulp-wrapper-baki)

# gulp-wrapper-baki

## install

```
npm install --save-dev gulp-wrapper-baki
```

## usage

### at plain shell

shell
```
$(npm bin)/baki task_name option1 option2 option3 ...
```

### at npm run

package.json
```
"scripts": {
  "task_name": "baki task_name"
  }
```

shell
```
npm run task_name option1 option2 option3 ...
```

## gulpfile example

```
var gulp  = require('gulp');
var gutil = require('gulp-util');

gulp.task('task_name', function(){
  var options = JSON.parse(gutil.env.baki);
  options.forEach(function(op){
    console.log(op);
  });
});
```
