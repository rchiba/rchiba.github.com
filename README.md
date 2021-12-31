blog
====

just a log
log of my life
a tangle of thoughts

Install rvm, ruby 3.0.0, bundle install

"An error occurred while installing eventmachine (1.2.7), and Bundler cannot continue."
`gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include `
from [this SO article](https://stackoverflow.com/questions/30818391/gem-eventmachine-fatal-error-openssl-ssl-h-file-not-found)


To run, clone this repo and run `bundle exec jekyll serve`

To deploy, add to GitHub and setup Github Pages on this repo.

That's it!