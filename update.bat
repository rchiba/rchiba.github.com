cd C:\Users\ryochiba\Documents\Personal\blog
jekyll --no-server
git commit -am "updating blog"
git push origin master
s3 put www.ryochiba.com _site/ /sub:withdelete /sync /acl:public-read
pause