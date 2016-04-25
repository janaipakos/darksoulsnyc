/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Dark Souls NYC',
       content: 'Dark Souls NYC was created to help users think about the world of Lordran and its inhabitants in a contemporary way. Edits and pull requests are welcome but please do not spam -_-'
    });
};

/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Dark Souls NYC' });
};
