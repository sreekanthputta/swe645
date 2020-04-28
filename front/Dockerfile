FROM tomcat
LABEL maintainer="sputta@gmu.edu"
RUN apt-get update && apt-get install -y npm && npm install -g @angular/cli && apt-get install -y net-tools && npm install -g http-server
WORKDIR /front
CMD echo n | npm install && ng build --prod
EXPOSE 4200
ENTRYPOINT http-server dist/ui -p 4200