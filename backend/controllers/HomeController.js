
class HomeController {

    // [Get] /
    index(req, res) {
        res.send('<h1>ZTeach Home Page!!!</h1>');
    }
}

module.exports = new HomeController;
