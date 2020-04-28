FROM node
LABEL maintainer="sputta@gmu.edu"
RUN apt-get update && npm install -g @angular/cli && apt-get install -y net-tools && npm install -g http-server
ADD . / front/
WORKDIR /front
CMD echo n | npm install && ng build --prod
EXPOSE 4200
ENTRYPOINT http-server dist/ui -p 4200