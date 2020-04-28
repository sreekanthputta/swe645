FROM tomcat
LABEL maintainer="sputta@gmu.edu"
RUN apt-get update && apt-get install -y net-tools
ADD target/rest.war /usr/local/tomcat/webapps
WORKDIR /usr/local/tomcat/bin/
CMD ["catalina.sh","run"]
EXPOSE 8080