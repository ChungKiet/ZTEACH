
class HomeController {

    // [Get] /
    index(req, res) {
        res.status(200).json({ page: 'Home page' });
    }

    register(req, res, next) {
        res.status(200).render("signup.html");
    }
    login(req, res, next) {
        res.status(200).render("login.html");
    }

    not_found(req, res) {
        res.status(404).send({
            "error": {
                "errors": [
                    {
                        "domain": "global",
                        "reason": "notFound",
                        "message": "Not Found " + req.params.slug
                    }
                ],
                "code": 404,
                "message": "Not Found " + req.params.slug
            }
        });
    }
}

module.exports = new HomeController;
