FROM node
LABEL maintainer="sputta@gmu.edu"
RUN apt-get update && npm install -g @angular/cli && apt-get install -y net-tools && npm install -g http-server
ADD . / front/
WORKDIR /front
RUN echo n | npm install && ng build --prod
CMD http-server dist/ui -p 4200
EXPOSE 4200