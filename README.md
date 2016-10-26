## Synopsis

A browser-based math learning website for kids in pre alpha state, build with Bootstrap, Jquery and Javascript. And a docker file for the dev environment with Node.js.

## Code Structure

```
.
├── Dockerfile
├── Dockerfile~
├── mysite
│   ├── bootstrap
│   │   ├── 3.3.7
│   │   ├── css
│   │   │   ├── bootstrap.css
│   │   │   ├── bootstrap.css.map
│   │   │   ├── bootstrap.min.css
│   │   │   ├── bootstrap.min.css.map
│   │   │   ├── bootstrap-theme.css
│   │   │   ├── bootstrap-theme.css.map
│   │   │   ├── bootstrap-theme.min.css
│   │   │   └── bootstrap-theme.min.css.map
│   │   ├── fonts
│   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   ├── glyphicons-halflings-regular.woff
│   │   │   └── glyphicons-halflings-regular.woff2
│   │   └── js
│   │       ├── bootstrap.js
│   │       ├── bootstrap.min.js
│   │       └── npm.js
│   ├── calculations
│   │   ├── add.html
│   │   ├── calculations.js
│   │   ├── durch.html
│   │   ├── mal.html
│   │   └── minus.html
│   ├── index.html
│   ├── jquery
│   │   ├── jquery-1.12.4.js
│   │   ├── jquery-1.12.4.min.js
│   │   └── jquery-3.1.1.min.js
│   ├── lina-style.css
│   └── TEST1
│       ├── index.html
│       └── input.js
└── README.md
```

## Motivation

A self-learning project.

## Installation

Copy all files except 'Dockerfile' in the root dir of your HTTP server.

## Setting up the Docker environment

If the Container does not run yet, you will have to build the image first

```docker build -t ubuntu1604/mysite:1.0 .```

In the next step, you can run a container from the image. You forward port 80 to 8080 and will have the change the first part of the path according to your local settings. That will map your local dir to a di inside the container, like '-v /local/dir:/container/dir'

``` docker run -ti -h WEBSITE --name MYSITE -p 8080:80 -v /home/work/Webseiten/docker/lina/mysite:/home/node/mysite/lina_v1 ubuntu1604/mysite:1.0 bash ```

If the container runs already (docker ps -a), then just type

```
docker start MYSITE
docker exec -it MYSITE bash
```

Inside the container use

```
cd <project>
node /user/bin/hs
```

This will show you a URL with a port that you can call from your host system.

## Contributors

Kristian Kißling

## License

GPLv2
