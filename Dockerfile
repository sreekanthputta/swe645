FROM tomcat
LABEL maintainer="savadhan@gmu.edu"
RUN apt-get update && apt-get install -y elinks
ADD target/assign1.war /usr/local/tomcat/webapp
ADD Srivalli.war /usr/local/tomcat/webapp
EXPOSE 8080
