#!/usr/bin/env node

'use strict';

var path = require('path');
var whichLocal = require('npm-which')(path.resolve(__dirname, '..'));
var whichCwd   = require('npm-which')(process.cwd());
var spawn = require('child_process').spawn;

try{
  var gulpPath = whichLocal.sync('gulp');
} catch(err){
  var gulpPath = whichCwd.sync('gulp');
}

if ( process.argv.length > 2 ){
  var taskName = process.argv[2];
  try{
    var taskOption = JSON.stringify( process.argv.slice(3) );
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
} else {
  console.log('Please set task name.');
  process.exit(1);
}

var gulp = spawn(gulpPath, [taskName,'--baki',taskOption], {
  stdio: [
    process.stdin,
    process.stdout,
    process.stderr,
  ],
});

gulp.on('data', function(data){
  console.log(data);
});

gulp.on('end', function(data){
  console.log(data);
});

