
class NewPostController {

    // [Get] /new-post
    index(req, res) {
        res.send('<form action="/posts" method="POST"><input type="text" name="Hoten"><button type="submit">Adddddd</button></form>');
    }
}

module.exports = new NewPostController;
