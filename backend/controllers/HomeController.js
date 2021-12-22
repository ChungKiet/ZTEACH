
class HomeController {

    // [Get] /
    index(req, res) {
        res.status(200).json({ page: 'Home page' });
    }

    register(req, res) {
        res.status(200).render("signup.html");
    }
    login(req, res) {
        res.status(200).render("login.html");
    }
    edit(req, res) {
        res.status(200).render("edit.html");
    }
    new_post(req, res) {
        res.status(200).render("new_post.html");
    }
    post_new_connect(req, res) {
        res.status(200).render("post_new_connect.html");
    }
    post_delete_connect(req, res) {
        res.status(200).render("post_delete_connect.html");
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
