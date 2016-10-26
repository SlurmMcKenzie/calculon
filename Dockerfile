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

