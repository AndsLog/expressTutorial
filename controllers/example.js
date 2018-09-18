(function () {
    class Example {
        constructor() {
            this.apiExample = this.apiExample.bind(this);
        }

        /**
         * api 範例程式，取得query中的值，並回傳給瀏覽器
         * @param {object} req http request
         * @param {object} res http response
        */
        apiExample(req, res) {
            res.status(200).send(req.query);
        }
    }

    module.exports = new Example();
}());