FROM ubuntu:16.04
LABEL description="This container contains an Ubuntu 16.04, Nodejs 6 and some HTML files."

MAINTAINER Kristian Kissling

ENV TERM=xterm

RUN	apt-get update && \
	apt-get install -y curl build-essential && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get update && \
	apt-get install -y nodejs && \
	groupadd -r node && \
	useradd -r -g node node && \
	mkdir /home/node && \
	chown node:node -R /home/node && \
	mkdir -p /home/node/mysite && \
	npm install http-server -g

WORKDIR /home/node/mysite
USER 	node

# docker build -t ubuntu1604/mysite:1.0 .
# docker run -ti -h WEBSITE --name MYSITE -p 8080:80 -v /home/work/Webseiten/docker/lina/mysite:/home/node/mysite/lina_v1 ubuntu1604/mysite:1.0 bash
