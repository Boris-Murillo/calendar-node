try {
    const express = require('express');
    const router = express.Router();
    const fs = require('fs');
    const PATH_ROUTER = __dirname;

    fs.readdirSync(PATH_ROUTER).forEach(file => {
    if (file !== 'index.js') {
        const route = require(`./${file}`);
        router.use('/calendar',route);
    }
    });
} catch (error) {
    console.log(error);
}  

    module.exports = router;