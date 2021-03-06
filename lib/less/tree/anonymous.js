(function (tree) {

tree.Anonymous = function (string) {
    this.value = string.value || string;
};
tree.Anonymous.prototype = {
    type: "Anonymous",
    eval: function () { return this; },
    compare: function (x) {
        if (!x.toCSS) {
            return -1;
        }
        
        var left = this.toCSS(),
            right = x.toCSS();
        
        if (left === right) {
            return 0;
        }
        
        return left < right ? -1 : 1;
    },
    genCSS: function (env, output) {
        output.add(this.value);
    },
    toCSS: tree.toCSS
};

})(require('../tree'));
