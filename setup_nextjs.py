import argparse
import glob
import os
from bs4 import BeautifulSoup


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d',
        '--dir',
        type=str,
        required=True)
    args = parser.parse_args()
    return args


def inspect_parser(soup, tag):
    for x in soup.find_all(tag):
        if x.get('src') and x['src'].startswith('/_next/'):
            x['src'] = "{% static \"" + x['src'] + "\" %}"
        if x.get('href') and x['href'].startswith('/_next/'):
            x['href'] = "{% static \"" + x['href'] + "\" %}"


def render_html_static():

    args = parse_args()
    print(args.dir)
    for html_file in glob.glob(os.path.join(args.dir, '*html')):
        print(html_file)
        soup = BeautifulSoup(open(html_file), 'html.parser')
        soup.insert(0, '{% load static %}')
        inspect_parser(soup, 'link')
        inspect_parser(soup, 'script')
        fout = open(html_file, 'wb')
        fout.write(soup.prettify('utf-8'))
        fout.close()


render_html_static()


# update next.config.js with (output:'export')-> This will create out folder contains static files
# npm rum build
# npx next export -o output
# mv out static
# cd ..
# python setup_nextjs.py --dir frontend/static

# ===================== update next.config.js==============
# const nextConfig = {
#   output: 'export',

# }

# module.exports = nextConfig

# ==============production static files ==============
# pip install whitenoise
# Add middleware=> 'whitenoise.middleware.WhiteNoiseMiddleware',
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
# python manage.py collectstatic
