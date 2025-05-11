# backend/Dockerfile

# 1) pick a multi-arch image
FROM eclipse-temurin:17-jdk-slim AS runtime

WORKDIR /app

# 2) copy the JAR you just built
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# 3) tell Docker we listen on 8080
EXPOSE 8080

# 4) start Spring Boot
ENTRYPOINT ["java","-jar","app.jar"]
