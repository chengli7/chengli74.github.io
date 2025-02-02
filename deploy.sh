 # 确保脚本抛出遇到的错误
  set -e

  # 生成静态文件
  npm run build

  # 进入生成的文件夹
  cd .vuepress/dist


  git init
  git add -A
  git commit -m 'deploy'

  # 如果发布到 https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

  # 如果发布到 https://<USERNAME>.github.io/<REPO>
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master:gh-pages
  # 我的配置如下
  git push -f https://github.com/cheng-sky/lcblog.github.io.git master:gh-pages

  cd -
