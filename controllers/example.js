(function () {
    class Example {
        constructor() {
            this.apiQueryExample = this.apiQueryExample.bind(this);
            this.apiBodyExample = this.apiBodyExample.bind(this);
        }

        /**
         * api 範例程式，取得query中的值，並回傳給瀏覽器
         * @param {object} req http request
         * @param {object} res http response
        */
        apiQueryExample(req, res) {
            res.status(200).send(req.query);
        }

        /**
         * api 範例程式，取得body中的值，並回傳給瀏覽器
         * @param {object} req http request
         * @param {object} res http response
        */
       apiBodyExample(req, res) {
        res.status(200).send(req.body);
    }
    }

    module.exports = new Example();
}());