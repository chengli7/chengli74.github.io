 # ȷ���ű��׳������Ĵ���
  set -e

  # ���ɾ�̬�ļ�
  npm run build

  # �������ɵ��ļ���
  cd .vuepress/dist


  git init
  git add -A
  git commit -m 'deploy'

  # ��������� https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

  # ��������� https://<USERNAME>.github.io/<REPO>
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master:gh-pages
  # �ҵ���������
  git push -f https://github.com/cheng-sky/lcblog.github.io.git master:gh-pages

  cd -
