make sure you have properly configure settings.py file

STEP 1:

===================== update next.config.js==============

const nextConfig = {

output: 'export',

}

module.exports = nextConfig

STEP 2:

mv out static

STEP 3:

python setup_nextjs.py --dir frontend/static
