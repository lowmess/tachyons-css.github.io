var _ = require('lodash')
var fs = require('fs')
var gzip = require('gzip-size')
var filesize = require('filesize')
var cssstats = require('cssstats')


var module = require('tachyons-border-radius/package.json')
var moduleCss = fs.readFileSync('node_modules/tachyons-border-radius/css/tachyons-border-radius.min.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.gzipSize)
var moduleName = module.name

var srcCSS = fs.readFileSync('./src/css/_border-radius.css', 'utf8')
var navDocs = fs.readFileSync('./src/templates/nav_docs.html', 'utf8')
var siteFooter = fs.readFileSync('./src/templates/footer.html', 'utf8')
var siteHeader = fs.readFileSync('./src/templates/header.html', 'utf8')
var head = fs.readFileSync('./src/templates/head.html', 'utf8')
var googleAnalytics = fs.readFileSync('./src/templates/ga.html', 'utf8')

var template = fs.readFileSync('./src/templates/docs/border-radius/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  moduleVersion: module.version,
  moduleSize: moduleSize,
  name: moduleName,
  moduleObj: moduleObj,
  srcCSS: srcCSS,
  navDocs: navDocs,
  siteFooter: siteFooter,
  googleAnalytics: googleAnalytics,
  head: head,
  siteHeader: siteHeader
})

fs.writeFileSync('./docs/themes/border-radius/index.html', html)
