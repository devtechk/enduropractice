define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <header class=\"hero\">\n        <div class=\"container\">\n            <div class=\"hero-content\">\n                <h1 class=\"hero-title\">"
    + alias4(((helper = (helper = helpers.firstTitle || (depth0 != null ? depth0.firstTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstTitle","hash":{},"data":data}) : helper)))
    + "<span>"
    + alias4(((helper = (helper = helpers.secondTitle || (depth0 != null ? depth0.secondTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondTitle","hash":{},"data":data}) : helper)))
    + "</span>\n                </h1>\n                <div class=\"call-to-download\">\n                    <a class=\"btn link-download\"\n                       href=\"https://github.com/devtechk/easy-startup-gulp-browsersync-sass\">"
    + alias4(((helper = (helper = helpers.download || (depth0 != null ? depth0.download : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"download","hash":{},"data":data}) : helper)))
    + "</a>\n                </div>\n                <div class=\"gitstar\">\n                    <iframe src=\"https://ghbtns.com/github-btn.html?user=devtechk&repo=easy-startup-gulp-browsersync-sass&type=star&count=false&size=large\"\n                            frameborder=\"0\" scrolling=\"0\" width=\"160px\" height=\"30px\"></iframe>\n                </div>\n            </div>\n        </div>\n    </header>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.headerFirst : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}); });